const PIN_HASH = "3472adbbcb9677d1b45365d37d96d1c33217d745567577fd9bd5c2766a258320";
    const PIN_SESSION_KEY = "pregnancyLactationPinUnlocked";

    async function sha256Hex(message) {
      const data = new TextEncoder().encode(message);
      const digest = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
    }

    function showPinLock() {
      const pinLock = document.getElementById("pinLock");
      const pinInput = document.getElementById("pinInput");
      document.body.classList.add("locked");
      pinLock.classList.add("show");
      pinLock.setAttribute("aria-hidden", "false");
      setTimeout(() => pinInput.focus(), 80);
    }

    function hidePinLock() {
      const pinLock = document.getElementById("pinLock");
      document.body.classList.remove("locked");
      pinLock.classList.remove("show");
      pinLock.setAttribute("aria-hidden", "true");
    }

    async function verifyPin() {
      const pinInput = document.getElementById("pinInput");
      const pinError = document.getElementById("pinError");
      const value = pinInput.value.trim();
      pinError.textContent = "";

      if (!value) {
        pinError.textContent = "PINを入力してください。";
        return;
      }

      try {
        const hashed = await sha256Hex(value);
        if (hashed === PIN_HASH) {
          sessionStorage.setItem(PIN_SESSION_KEY, "1");
          pinInput.value = "";
          hidePinLock();
        } else {
          pinError.textContent = "PINが違います。";
          pinInput.select();
        }
      } catch (e) {
        pinError.textContent = "このブラウザでは認証処理を実行できません。";
      }
    }

    function initPinLock() {
      const pinSubmitBtn = document.getElementById("pinSubmitBtn");
      const pinInput = document.getElementById("pinInput");
      pinSubmitBtn.addEventListener("click", verifyPin);
      pinInput.addEventListener("keydown", event => {
        if (event.key === "Enter") verifyPin();
      });
      pinInput.addEventListener("input", async () => {
        const value = pinInput.value.trim();
        if (value.length < 4) return;
        const hashed = await sha256Hex(value);
        if (hashed === PIN_HASH) {
          sessionStorage.setItem(PIN_SESSION_KEY, "1");
          pinInput.value = "";
          hidePinLock();
        }
      });

      if (sessionStorage.getItem(PIN_SESSION_KEY) === "1") {
        hidePinLock();
      } else {
        showPinLock();
      }
    }


    function normalize(str) {
      return kataToHira(String(str || ""))
        .toLowerCase()
        .normalize("NFKC")
        .replace(/[・\s\-_/／（）()、,\.]/g, "");
    }

    function getSearchBlob(drug) {
      return normalize([
        drug.ingredientJa,
        drug.ingredientEn,
        drug.className,
        ...drug.brands,
        ...drug.searchTerms
      ].join(" "));
    }

    function findDrugMatches(rawTerm) {
      const q = normalize(rawTerm);
      if (q.length < 2) return [];
      return DRUGS
        .map(drug => {
          const blob = getSearchBlob(drug);
          let score = 0;
          if (blob.includes(q)) score += 10;
          if (normalize(drug.brands.join("")).startsWith(q)) score += 12;
          if (normalize(drug.ingredientJa).startsWith(q)) score += 10;
          if (normalize(drug.ingredientEn).startsWith(q)) score += 8;
          if (normalize(drug.className).includes(q)) score += 4;
          return { drug, score };
        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score || a.drug.brands[0].localeCompare(b.drug.brands[0], "ja"))
        .map(x => x.drug);
    }

    function getActiveTerm() {
      const raw = input.value;
      const parts = raw.split(/[\s　、,，]+/);
      return parts[parts.length - 1] || "";
    }

    function clearActiveTerm() {
      const raw = input.value;
      const idx = Math.max(
        raw.lastIndexOf("\n"),
        raw.lastIndexOf(" "),
        raw.lastIndexOf("　"),
        raw.lastIndexOf("、"),
        raw.lastIndexOf(","),
        raw.lastIndexOf("，")
      );
      input.value = idx >= 0 ? raw.slice(0, idx + 1) : "";
      // 次の入力へ移りやすいよう、空欄寄りにする
      input.value = input.value.trim() ? input.value : "";
      input.focus();
    }

    function statusType(summary, insert, axis) {
      const s = String(summary || "");
      // 色と優先度は専門書側の総合評価を主に見る。
      // 添付文書は多くが一律の有益性記載で、判断材料としては補助表示に留める。
      if (s.includes("禁忌")) return "danger";
      if (s.includes("本文参照")) return "caution";
      if (s.includes("情報なし")) return "unknown";
      if (s.includes("使用可")) return "ok";
      return "unknown";
    }

    function badgeClass(type) {
      return ["ok", "caution", "danger", "unknown", "mismatch"].includes(type) ? type : "unknown";
    }

    function statusText(type) {
      return {
        ok: "使用しやすい",
        caution: "要確認",
        danger: "原則避ける",
        unknown: "情報不足",
        mismatch: "乖離あり"
      }[type] || "要確認";
    }

    function renderSuggestions(items) {
      suggestionsEl.innerHTML = "";
      if (!items.length) {
        suggestionsEl.innerHTML = '<div class="hint">該当候補がありません。現在のプロトタイプは抗菌薬のみです。例：「クラ」「サワ」「フロ」で試してください。</div>';
        return;
      }
      for (const drug of items.slice(0, 30)) {
        const already = selectedDrugs.some(d => d.id === drug.id);
        const el = document.createElement("div");
        el.className = "suggestion";
        el.innerHTML = `
          <div class="top">
            <div>
              <div class="brand">${escapeHtml(drug.brands.join("、"))}${already ? "（選択済み）" : ""}</div>
              <div class="meta">${escapeHtml(drug.ingredientJa)} / ${escapeHtml(drug.ingredientEn)}</div>
            </div>
            <span class="class-pill">${escapeHtml(drug.className)}</span>
          </div>
        `;
        el.addEventListener("click", () => addDrug(drug));
        suggestionsEl.appendChild(el);
      }
    }

    function sampleSearch(term) {
      input.value = term;
      input.focus();
      search();
    }

    window.sampleSearch = sampleSearch;

    function search() {
      const active = getActiveTerm();
      const q = normalize(active);
      searchStatusEl.textContent = `入力検出：「${active}」`;

      if (q.length < 2) {
        suggestionsEl.innerHTML = "";
        searchStatusEl.textContent = "2文字以上で候補を表示します。";
        return;
      }

      const items = findDrugMatches(active);
      searchStatusEl.textContent = `検索語「${active}」：候補 ${items.length}件`;
      renderSuggestions(items);
    }


    function syncSelectionViews() {
      renderSelectedChips();
    renderGlobalSummaryV29();
      renderResults();
      refreshOpenComparison();
    }

    function addDrug(drug, options = {}) {
      if (!selectedDrugs.some(d => d.id === drug.id)) {
        selectedDrugs.push(drug);
      }
      if (options.clearInput !== false) {
        clearActiveTerm();
        suggestionsEl.innerHTML = "";
      }
      syncSelectionViews();
    }

    function removeDrug(id, options = {}) {
      selectedDrugs = selectedDrugs.filter(d => d.id !== id);
      syncSelectionViews();
      if (options.focusInput) input.focus();
    }

    function toggleDrugSelection(drugId) {
      const drug = DRUGS.find(d => d.id === drugId);
      if (!drug) return;
      const already = selectedDrugs.some(d => d.id === drugId);
      if (already) {
        removeDrug(drugId);
      } else {
        addDrug(drug, { clearInput: false });
      }
    }

    function renderSelectedChips() {
      selectedCountEl.textContent = `${selectedDrugs.length}剤`;
      if (bottomSelectedCountEl) bottomSelectedCountEl.textContent = `${selectedDrugs.length}剤`;
      auditBtn.disabled = selectedDrugs.length === 0;
      if (bottomAuditBtn) bottomAuditBtn.disabled = selectedDrugs.length === 0;

      if (!selectedDrugs.length) {
        selectedChipsEl.innerHTML = '<span class="hint">まだ選択されていません。</span>';
        return;
      }

      selectedChipsEl.innerHTML = selectedDrugs.map((drug, index) => `
        <span class="chip v29-drug-chip">
          <span class="chip-number">${index + 1}</span>
          <span class="chip-main">
            <span class="chip-brand">${escapeHtml(drug.brands[0])}</span>
            <small>${escapeHtml(drug.ingredientJa)}</small>
          </span>
          <button type="button" aria-label="${escapeHtml(drug.brands[0])}を削除" data-remove="${escapeHtml(drug.id)}">×</button>
        </span>
      `).join("");

      selectedChipsEl.querySelectorAll("[data-remove]").forEach(btn => {
        btn.addEventListener("click", () => removeDrug(btn.dataset.remove));
      });
    }

    function auditSelected() {
      renderResults();
    }

    function renderResults() {
      if (!selectedDrugs.length) {
        resultEl.innerHTML = '<div class="empty">薬剤を検索して選択してください。</div>';
        return;
      }

      const ranked = [...selectedDrugs].sort((a, b) => riskRank(b) - riskRank(a));
      const axisLabel = currentMode === "pregnancy" ? "妊娠" : "授乳";

      const row = (label, sub, contentFn) => `
        <tr>
          <th>
            <span>${escapeHtml(label)}</span>
            ${sub ? `<small>${escapeHtml(sub)}</small>` : ""}
          </th>
          ${ranked.map((drug) => {
            const type = strongestType(drug);
            return `<td class="${badgeClass(type)}">${contentFn(drug, type)}</td>`;
          }).join("")}
        </tr>
      `;

      resultEl.innerHTML = `
        <div class="v29-result-head">
          <h2>選択薬剤の比較</h2>
          <div class="v29-result-mode-inline">
            <span>${axisLabel}モード・${ranked.length}剤</span>
            <div class="v29-mini-mode">
              <button type="button" class="${currentMode === "pregnancy" ? "active" : ""}" data-result-mode="pregnancy">妊娠</button>
              <button type="button" class="${currentMode === "lactation" ? "active" : ""}" data-result-mode="lactation">授乳</button>
            </div>
          </div>
        </div>

        <div class="rx-table-wrap v29-table-wrap" aria-label="${axisLabel}の薬剤比較表">
          <table class="rx-table v29-table">
            <thead>
              <tr>
                <th>項目</th>
                ${ranked.map((drug) => `
                  <th>
                    <button type="button" class="rx-table-title" data-drug-id="${escapeHtml(drug.id)}">${escapeHtml(drug.brands[0])}</button>
                    <div class="rx-table-sub">${escapeHtml(drug.ingredientJa)}</div>
                  </th>
                `).join("")}
              </tr>
            </thead>
            <tbody>
              ${row("総合評価", "", (drug, type) => `<span class="rx-status-pill ${badgeClass(type)}">${escapeHtml(getAxisSummary(drug))}</span>`)}
              ${row("専門書", "JSNP 第39版", (drug, type) => `<span class="rx-status-pill ${badgeClass(type)}">${escapeHtml(getAxisSummary(drug))}</span>`)}
              ${row("添付文書", "", (drug) => `<span class="rx-mini-chip">${escapeHtml(getDisplayInsert(getAxisInsert(drug)))}</span>`)}
              ${row("詳細", "", (drug) => `<button type="button" class="rx-detail-btn" data-drug-id="${escapeHtml(drug.id)}">詳細を見る ›</button>`)}
            </tbody>
          </table>
        </div>
      `;

      resultEl.querySelectorAll("[data-result-mode]").forEach(btn => {
        btn.addEventListener("click", () => {
          setModeKeepingResultPosition(btn.dataset.resultMode);
        });
      });

      resultEl.querySelectorAll(".rx-table-title, .rx-detail-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const drug = DRUGS.find(d => d.id === btn.dataset.drugId);
          if (drug) openDrugDetailModal(drug, currentMode);
        });
      });
    }

    function getAxisSummary(drug) {
      return currentMode === "pregnancy" ? drug.pregnancySummary : drug.lactationSummary;
    }

    function getAxisInsert(drug) {
      return currentMode === "pregnancy" ? drug.pregnancyInsert : drug.lactationInsert;
    }

    function getDisplayInsert(value) {
      const v = String(value || "").trim();
      if (v === "添文②") return "有益性（添文②）";
      if (v === "添文③") return "有益性（添文③）";
      if (v === "—" || v === "-" || v === "") return "記載なし";
      return v;
    }

    function getAxisDetail(detail) {
      return currentMode === "pregnancy" ? detail.pregnancy : detail.lactation;
    }

    function strongestType(drug) {
      return statusType(getAxisSummary(drug), getAxisInsert(drug), currentMode);
    }

    function riskRank(drug) {
      return { mismatch: 5, danger: 4, caution: 3, unknown: 2, ok: 1 }[strongestType(drug)] || 0;
    }

    function renderDrugAccordion(drug, idx) {
      const axisLabel = currentMode === "pregnancy" ? "妊娠" : "授乳";
      const type = strongestType(drug);
      const detail = DETAILS[drug.detailKey] || {};
      const detailText = getAxisDetail(detail);

      return `
        <article class="rx-item">
          <button class="rx-title" type="button" data-drug-id="${escapeHtml(drug.id)}">
            <div>
              <div class="name">${idx + 1}. ${escapeHtml(drug.brands.join("、"))}</div>
              <div class="sub">${escapeHtml(drug.ingredientJa)} / ${escapeHtml(drug.className)}</div>
              <div class="mini-eval">
                <span>総合評価：${escapeHtml(getAxisSummary(drug))}</span>
                <span>添付文書：${escapeHtml(getDisplayInsert(getAxisInsert(drug)))}</span>
              </div>
            </div>
            <span class="badge ${badgeClass(type)}">${statusText(type)}</span>
          </button>
          <button type="button" class="rx-remove-btn" data-remove-result="${escapeHtml(drug.id)}" aria-label="${escapeHtml(drug.brands[0])}を比較から外す">×</button>
          <div class="rx-body">
            <div class="status-grid">
              ${statusBox(axisLabel, getAxisSummary(drug), getAxisInsert(drug), type)}
            </div>

            ${type === "mismatch" ? `
              <div class="alert mismatch">
                ${axisLabel}の総合評価と添付文書情報に乖離があります。必要性、代替薬、疑義照会要否を確認してください。
              </div>
            ` : ""}

            <section class="detail-card open" style="box-shadow:none; border-radius:16px;">
              <h3>${escapeHtml(detail.title || drug.className)}：${axisLabel}の詳細要約</h3>
              <div class="detail-section">
                <h4>${axisLabel}</h4>
                <p>${escapeHtml(detailText || "詳細情報は未登録です。")}</p>
              </div>
              <div class="detail-section">
                <h4>実務ポイント</h4>
                <p>${escapeHtml(detail.point || "添付文書、ガイドライン、患者背景を確認してください。")}</p>
              </div>
              ${currentMode === "lactation" ? ridTable(drug.detailKey) : ""}
            </section>
          </div>
        </article>
      `;
    }

    function statusBox(label, summary, insert, type) {
      return `
        <div class="status-box">
          <div class="status-head">
            <strong>${label}</strong>
            <span class="badge ${badgeClass(type)}">${statusText(type)}</span>
          </div>
          <div class="kv">
            <div class="k">総合評価</div>
            <div class="v">${escapeHtml(summary)}</div>
            <div class="k">添付文書</div>
            <div class="v">${escapeHtml(getDisplayInsert(insert))}</div>
          </div>
        </div>
      `;
    }

    function ridTable(detailKey) {
      const rowsByKey = {
        penicillin: [["アンピシリン", "0.17〜0.51", "0.58", "1.3"], ["アモキシシリン", "0.95", "0.014〜0.043", "1.7"]],
        cephem: [["セファレキシン", "0.39〜1.47", "0.008〜0.25", "0.5〜1.2"], ["セフトリアキソン", "4.1〜4.2", "0.03", "7.3"], ["セフェピム", "0.3", "0.8", "2"]],
        carbapenem: [["メロペネム", "0.17〜0.23", "―", "1.58〜3.8"]],
        monobactam: [["アズトレオナム", "0.2〜1", "0.005", "1.7"]],
        glycopeptide: [["バンコマイシン", "6.57〜6.67", "―", "5〜11"], ["テイコプラニン", "1.4", "―", "―"]],
        aminoglycoside: [["ストレプトマイシン", "0.3〜0.6", "0.12〜1", "2.6"], ["ゲンタマイシン", "2.1", "0.11〜0.44", "2〜3"]],
        macrolide: [["エリスロマイシン", "1.4〜1.7", "0.92", "1.5〜2"], ["クラリスロマイシン", "1.62〜2.1", ">1", "5〜7"], ["アジスロマイシン", "5.9", "―", "48〜68"]],
        tetracycline: [["ドキシサイクリン", "4.2〜13.3", "0.3〜0.4", "15〜25"], ["ミノサイクリン", "4.2", "―", "15〜20"]],
        lincomycin: [["クリンダマイシン", "0.9〜1.8", "0.47", "2.4"]],
        oxazolidinone: [["リネゾリド", "1.07〜15.61", "―", "5.2"]],
        chloramphenicol: [["クロラムフェニコール", "2.98〜8.5", "0.5〜0.6", "4"]],
        quinolone: [["オフロキサシン", "3.1", "0.98〜1.66", "5〜7"], ["シプロフロキサシン", "0.44〜6.34", ">1", "4.1"]],
        st: [["スルファメトキサゾール", "2.06〜3.09", "0.06", "10.1"], ["トリメトプリム", "3.94〜9.86", "1.25", "8〜10"]],
        antitb: [["イソニアジド", "1.2〜18", "―", "1.1〜3.1"], ["パラアミノサリチル酸Ca", "0.29", "0.09〜0.17", "1"], ["ピラジナミド", "1.5", "1", "3.1"], ["エタンブトール", "5.3〜11.5", "0.16〜0.23", "3.5"]]
      };
      const rows = rowsByKey[detailKey];
      if (!rows) return "";
      return `
        <div class="detail-section lactation-data-section">
          <h4>授乳関連データ</h4>
          <p class="mini-table-caption">各ラベルを押すと指標の意味を確認できます。数値は授乳中の薬剤移行を考えるための補助情報です。</p>
          <div class="lactation-data-list">
            ${rows.map(r => `
              <article class="lactation-data-card">
                <div class="lactation-drug-name">${escapeHtml(r[0])}</div>
                <div class="lactation-metrics">
                  <div class="metric-box">
                    <button type="button" class="metric-help-btn compact" data-metric="rid">RID(%)</button>
                    <div class="metric-value">${escapeHtml(r[1])}</div>
                  </div>
                  <div class="metric-box">
                    <button type="button" class="metric-help-btn compact" data-metric="mp">M/P比</button>
                    <div class="metric-value">${escapeHtml(r[2])}</div>
                  </div>
                  <div class="metric-box">
                    <button type="button" class="metric-help-btn compact" data-metric="half">T1/2(h)</button>
                    <div class="metric-value">${escapeHtml(r[3])}</div>
                  </div>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      `;
    }


    function splitBulkTerms(value) {
      return String(value || "")
        .split(/[\n\r、,，]+/)
        .map(s => s.trim())
        .filter(Boolean);
    }

    function openBulkModal() {
      bulkModal.style.display = "";
      bulkModal.style.pointerEvents = "";
      bulkModal.classList.add("open");
      bulkModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      bulkChosen = new Map();
      bulkInput.value = "";
      bulkPreview.innerHTML = "";
      bulkStatus.textContent = "薬剤名を入力し、カンマ・読点・改行で区切ると1件候補は自動選択します。";
      addBulkBtn.disabled = true;
      addBulkBtn.textContent = "結果表示";
      setTimeout(() => bulkInput.focus(), 50);
    }

    function closeBulkModal(options = {}) {
      bulkModal.classList.remove("open");
      bulkModal.setAttribute("aria-hidden", "true");
      bulkModal.style.display = "none";
      bulkModal.style.pointerEvents = "none";
      document.body.classList.remove("modal-open");

      if (bulkInput) bulkInput.blur();

      // 通常の閉じる操作では検索欄へ戻す。結果表示時は戻さない。
      if (!options.skipFocusBack && input) {
        input.focus();
      }
    }

    function getBulkTermSegments(text) {
      const segments = [];
      const source = String(text || "");
      const re = /([^、,\n\r\t;；]+)([、,\n\r\t;；]+|$)/g;
      let match;

      while ((match = re.exec(source)) !== null) {
        const term = match[1].trim();
        if (!term) continue;

        const delimiter = match[2] || "";
        const end = re.lastIndex;
        const committed = delimiter.length > 0 || end < source.length;
        segments.push({ term, committed });
      }

      return segments;
    }

    function analyzeBulkInput() {
      const segments = (typeof getBulkTermSegments === "function" ? getBulkTermSegments(bulkInput.value) : splitBulkTerms(bulkInput.value).map(term => ({ term, committed: true })));
      bulkChosen = new Map();

      if (!segments.length) {
        bulkStatus.textContent = "薬剤名を入力し、カンマ・読点・改行で区切ると1件候補は自動選択します。";
        bulkPreview.innerHTML = "";
        addBulkBtn.disabled = true;
        addBulkBtn.textContent = "結果表示";
        return;
      }

      const blocks = segments.map((segment, idx) => {
        const term = segment.term;
        const matches = findDrugMatches(term);
        const uniqueMatches = matches.filter((drug, i, arr) => arr.findIndex(d => d.id === drug.id) === i);

        if (uniqueMatches.length === 1) {
          const drug = uniqueMatches[0];
          const duplicated = selectedDrugs.some(d => d.id === drug.id);
          if (segment.committed && !duplicated) {
            bulkChosen.set(idx, drug.id);
            return bulkLineAuto(term, drug, duplicated, true);
          }
          return bulkLineAuto(term, drug, duplicated, false);
        }

        if (uniqueMatches.length > 1) {
          return bulkLineMulti(term, idx, uniqueMatches.slice(0, 8), segment.committed);
        }

        return `
          <div class="bulk-line none">
            <div class="bulk-line-head">「${escapeHtml(term)}」：ヒットなし</div>
          </div>
        `;
      });

      bulkPreview.innerHTML = blocks.join("");
      attachBulkChoiceHandlers(segments.map(s => s.term));

      updateBulkAddButton();
    }

    function bulkLineAuto(term, drug, duplicated, committed = true) {
      const label = duplicated ? "選択済み" : (committed ? "✓ 自動選択" : "候補 1件");
      const note = committed ? "" : " <span style=\"opacity:.65;\">区切ると選択</span>";
      return `
        <div class="bulk-line auto${committed ? " committed" : " pending"}">
          <div class="bulk-line-head">${label}${note}</div>
          <div class="bulk-pill-row">
            <button type="button" class="bulk-pill selected" disabled>${escapeHtml(drug.brands[0])} <span style="opacity:.6;">← ${escapeHtml(term)}</span></button>
          </div>
        </div>
      `;
    }

    function bulkLineMulti(term, idx, matches, committed = true) {
      return `
        <div class="bulk-line multi" data-bulk-line="${idx}">
          <div class="bulk-line-head">「${escapeHtml(term)}」：${committed ? "候補が複数あります — 選択してください" : "候補が複数あります — 入力中"}</div>
          <div class="bulk-pill-row">
            ${matches.map(drug => {
              const dup = selectedDrugs.some(d => d.id === drug.id);
              return `<button type="button" class="bulk-pill${bulkChosen.get(idx) === drug.id ? " selected" : ""}" data-bulk-choice="${idx}" data-drug-id="${escapeHtml(drug.id)}"${dup ? " disabled" : ""}>${escapeHtml(drug.brands[0])}${dup ? "（選択済み）" : ""}</button>`;
            }).join("")}
            <button type="button" class="bulk-pill none-choice" data-bulk-choice="${idx}" data-drug-id="">一選ばない</button>
          </div>
        </div>
      `;
    }

    function attachBulkChoiceHandlers(terms) {
      bulkPreview.querySelectorAll("[data-bulk-choice]").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.dataset.bulkChoice);
          const drugId = btn.dataset.drugId;
          if (drugId) {
            bulkChosen.set(idx, drugId);
          } else {
            bulkChosen.delete(idx);
          }

          const line = btn.closest(".bulk-line");
          line.querySelectorAll(".bulk-pill").forEach(p => p.classList.remove("selected"));
          if (drugId) btn.classList.add("selected");

          updateBulkAddButton();
        });
      });
    }

    function updateBulkAddButton() {
      const ids = [...new Set([...bulkChosen.values()])].filter(id => !selectedDrugs.some(d => d.id === id));
      const totalTerms = (typeof getBulkTermSegments === "function" ? getBulkTermSegments(bulkInput.value) : splitBulkTerms(bulkInput.value)).length;
      addBulkBtn.disabled = ids.length === 0;
      addBulkBtn.textContent = "結果表示";
      if (totalTerms) {
        bulkStatus.textContent = ids.length ? `✓ 結果表示候補 ${ids.length}剤` : "区切り後に自動選択される候補はまだありません";
      }
    }

    function addBulkSelected() {
      const ids = [...new Set([...bulkChosen.values()])].filter(id => !selectedDrugs.some(d => d.id === id));
      const drugs = ids.map(id => DRUGS.find(d => d.id === id)).filter(Boolean);
      if (!drugs.length) return;

      selectedDrugs.push(...drugs);

      // 先に結果を確実に再描画
      if (typeof syncSelectionViews === "function") {
        syncSelectionViews();
      } else {
        renderSelectedChips();
        if (typeof renderGlobalSummaryV29 === "function") renderGlobalSummaryV29();
        renderResults();
      }

      // 結果表示：モーダルを閉じて結果エリアへジャンプ
      forceBulkResultTransitionV41();
    }


    function forceBulkResultTransitionV41() {
      // 1. モーダルとキーボードを閉じる
      if (bulkModal) {
        bulkModal.classList.remove("open");
        bulkModal.setAttribute("aria-hidden", "true");
        bulkModal.style.display = "none";
        bulkModal.style.pointerEvents = "none";
      }
      document.body.classList.remove("modal-open");

      if (bulkInput) bulkInput.blur();
      if (input) input.blur();
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }

      // 2. iOS Safariではキーボードが閉じるまでスクロールが負けるため、複数回補正
      const jump = () => {
        const target = resultEl || document.getElementById("result");
        if (!target) return;

        const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - 10);
        window.scrollTo({ top, behavior: "smooth" });
      };

      requestAnimationFrame(() => {
        jump();
        setTimeout(jump, 180);
        setTimeout(jump, 420);
      });
    }


    const HISTORY_KEY = "pregnancyLactationDrugHistory";
    const THEME_KEY = "pregnancyLactationThemeMode";

    function getHistory() {
      try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
      } catch (e) {
        return {};
      }
    }

    function saveHistory(history) {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }

    function recordDrugView(drug) {
      const today = new Date().toISOString().slice(0, 10);
      const history = getHistory();
      const current = history[drug.id] || {
        id: drug.id,
        name: drug.brands[0],
        ingredientJa: drug.ingredientJa,
        count: 0,
        days: {}
      };
      current.name = drug.brands[0];
      current.ingredientJa = drug.ingredientJa;
      current.count += 1;
      current.lastViewed = new Date().toISOString();
      current.days[today] = (current.days[today] || 0) + 1;
      history[drug.id] = current;
      saveHistory(history);
    }

    function openHistoryModal() {
      renderHistory();
      historyModal.classList.add("open");
      historyModal.setAttribute("aria-hidden", "false");
    }

    function closeHistoryModal() {
      historyModal.classList.remove("open");
      historyModal.setAttribute("aria-hidden", "true");
    }

    function renderHistory() {
      const history = getHistory();
      const items = Object.values(history).sort((a, b) => b.count - a.count);
      const total = items.reduce((sum, item) => sum + (item.count || 0), 0);
      const days = new Set(items.flatMap(item => Object.keys(item.days || {})));

      historyTotalViews.textContent = total;
      historyDrugCount.textContent = items.length;
      historyDays.textContent = days.size;

      if (!items.length) {
        historyList.innerHTML = '<div class="empty">まだ履歴がありません。薬剤詳細を開くと記録されます。</div>';
        return;
      }

      const max = Math.max(...items.map(item => item.count), 1);
      historyList.innerHTML = items.slice(0, 12).map((item, index) => {
        const width = Math.max(8, Math.round((item.count / max) * 100));
        return `
          <div class="history-row">
            <div class="history-rank">${index + 1}</div>
            <div>
              <div class="history-name">${escapeHtml(item.name)}</div>
              <div class="history-bar"><span style="width:${width}%"></span></div>
            </div>
            <div class="history-count">${item.count}</div>
          </div>
        `;
      }).join("");
    }

    function clearHistory() {
      if (!confirm("使用履歴を消去しますか？")) return;
      localStorage.removeItem(HISTORY_KEY);
      renderHistory();
    }

    function getPreferredTheme() {
      return localStorage.getItem(THEME_KEY) || "auto";
    }

    function systemPrefersDark() {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function applyTheme(mode = getPreferredTheme(), show = false) {
      const actual = mode === "auto" ? (systemPrefersDark() ? "dark" : "light") : mode;
      document.documentElement.dataset.theme = actual;
      localStorage.setItem(THEME_KEY, mode);

      const icon = mode === "auto" ? "◐" : mode === "dark" ? "🌙" : "☀️";
      themeBtn.textContent = icon;
      themeBtn.setAttribute("aria-label", `表示モード：${mode === "auto" ? "自動" : mode === "dark" ? "ダーク" : "ライト"}`);

      if (show) {
        themeToast.textContent = `表示モード：${mode === "auto" ? "自動" : mode === "dark" ? "ダーク" : "ライト"}`;
        themeToast.classList.add("show");
        setTimeout(() => themeToast.classList.remove("show"), 1000);
      }
    }

    function toggleTheme() {
      const order = ["auto", "light", "dark"];
      const current = getPreferredTheme();
      const next = order[(order.indexOf(current) + 1) % order.length];
      applyTheme(next, true);
    }

    function openDrugDetailModal(drug, mode = currentMode) {
      recordDrugView(drug);
      const detail = DETAILS[drug.detailKey] || {};
      const showPregnancy = mode === "pregnancy" || mode === "both";
      const showLactation = mode === "lactation" || mode === "both";

      drugDetailTitle.textContent = `${drug.brands.join("、")}｜${drug.ingredientJa}`;
      drugDetailBody.innerHTML = `
        <div class="drug-sub" style="margin-bottom:10px;">${escapeHtml(drug.ingredientEn)} / ${escapeHtml(drug.className)}</div>

        <div class="status-grid">
          ${showPregnancy ? statusBox("妊娠の評価", drug.pregnancySummary, getDisplayInsert(drug.pregnancyInsert), statusType(drug.pregnancySummary, drug.pregnancyInsert, "pregnancy")) : ""}
          ${showLactation ? statusBox("授乳の評価", drug.lactationSummary, getDisplayInsert(drug.lactationInsert), statusType(drug.lactationSummary, drug.lactationInsert, "lactation")) : ""}
        </div>

        <section class="detail-card open" style="display:block; box-shadow:none; border-radius:16px; margin-top:12px;">
          <h3>${escapeHtml(detail.title || drug.className)}：詳細要約</h3>
          ${showPregnancy ? `
            <div class="detail-section">
              <h4>妊娠中</h4>
              <p>${escapeHtml(detail.pregnancy || "詳細情報は未登録です。")}</p>
            </div>
          ` : ""}
          ${showLactation ? `
            <div class="detail-section">
              <h4>授乳中</h4>
              <p>${escapeHtml(detail.lactation || "詳細情報は未登録です。")}</p>
            </div>
          ` : ""}
          <div class="detail-section">
            <h4>実務ポイント</h4>
            <p>${escapeHtml(detail.point || "妊娠週数、授乳児月齢、適応、用量を確認してください。")}</p>
          </div>
          ${showLactation ? ridTable(drug.detailKey) : ""}
          <div class="detail-section">
            <h4>注意</h4>
            <p>この評価は処方判断を代替しません。患者背景、妊娠週数、授乳児月齢、適応、用量を確認してください。</p>
          </div>
          <div class="detail-actions">
            <button type="button" class="ghost" id="openSameClassBtn">同分類を比較</button>
          </div>
        </section>
      `;

      const sameClassBtn = document.getElementById("openSameClassBtn");
      if (sameClassBtn) {
        sameClassBtn.addEventListener("click", () => {
          const group = findComparisonGroupForDrug(drug);
          if (group) {
            closeDrugDetailModal();
            openComparison(group);
          }
        });
      }

      drugDetailModal.classList.add("open");
      drugDetailModal.setAttribute("aria-hidden", "false");
      bindMetricHelpButtons(drugDetailBody);
    }

    function closeDrugDetailModal() {
      drugDetailModal.classList.remove("open");
      drugDetailModal.setAttribute("aria-hidden", "true");
      drugDetailBody.innerHTML = "";
    }

    const ANTIBIOTIC_GROUPS = [
      { key: "penicillin", label: "ペニシリン系", match: d => d.detailKey === "penicillin" },
      { key: "cephem", label: "セフェム系", match: d => d.detailKey === "cephem" },
      { key: "macrolide", label: "マクロライド系", match: d => d.detailKey === "macrolide" },
      { key: "quinolone", label: "ニューキノロン系", match: d => d.detailKey === "quinolone" },
      { key: "other", label: "その他（ST合剤・テトラサイクリン等）", match: d => ["carbapenem","penem","monobactam","glycopeptide","fosfomycin","aminoglycoside","tetracycline","lincomycin","oxazolidinone","chloramphenicol","st"].includes(d.detailKey) },
      { key: "antitb", label: "抗結核薬", match: d => d.detailKey === "antitb" }
    ];

    function findComparisonGroupForDrug(drug) {
      return ANTIBIOTIC_GROUPS.find(group => group.match(drug));
    }

    function initCategoryBrowser() {
      antibioticCount.textContent = DRUGS.length;

      antibioticSubButtons.innerHTML = ANTIBIOTIC_GROUPS.map(group => {
        const count = DRUGS.filter(group.match).length;
        return `<button type="button" class="subcategory-btn" data-group="${escapeHtml(group.key)}">${escapeHtml(group.label)} <span class="count">${count}剤</span></button>`;
      }).join("");

      antibioticCategoryBtn.addEventListener("click", () => {
        antibioticSubPanel.hidden = !antibioticSubPanel.hidden;
      });

      closeSubPanelBtn.addEventListener("click", () => {
        antibioticSubPanel.hidden = true;
      });

      antibioticSubButtons.querySelectorAll("[data-group]").forEach(btn => {
        btn.addEventListener("click", () => {
          const group = ANTIBIOTIC_GROUPS.find(g => g.key === btn.dataset.group);
          if (!group) return;
          openComparison(group);
        });
      });

      closeCompareBtn.addEventListener("click", closeComparison);
      compareModal.addEventListener("click", event => {
        if (event.target === compareModal) closeComparison();
      });

      closeDrugDetailBtn.addEventListener("click", closeDrugDetailModal);
      drugDetailModal.addEventListener("click", event => {
        if (event.target === drugDetailModal) closeDrugDetailModal();
      });
      closeMetricHelpBtn.addEventListener("click", closeMetricHelp);
      metricHelpModal.addEventListener("click", event => {
        if (event.target === metricHelpModal) closeMetricHelp();
      });

      historyBtn.addEventListener("click", openHistoryModal);
      closeHistoryBtn.addEventListener("click", closeHistoryModal);
      historyModal.addEventListener("click", event => {
        if (event.target === historyModal) closeHistoryModal();
      });
      clearHistoryBtn.addEventListener("click", clearHistory);
      themeBtn.addEventListener("click", toggleTheme);
      if (window.matchMedia) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
          if (getPreferredTheme() === "auto") applyTheme("auto");
        });
      }
      applyTheme(getPreferredTheme());
    }

    function bindComparisonInteractions() {
      comparisonScroll.querySelectorAll("[data-compare-drug]").forEach(btn => {
        btn.addEventListener("click", () => {
          const drug = DRUGS.find(d => d.id === btn.dataset.compareDrug);
          if (drug) openDrugDetailModal(drug, "both");
        });
      });

      comparisonScroll.querySelectorAll("[data-compare-select]").forEach(btn => {
        btn.addEventListener("click", () => {
          toggleDrugSelection(btn.dataset.compareSelect);
        });
      });
    }

    function refreshOpenComparison() {
      if (!currentComparisonGroup || !compareModal.classList.contains("open")) return;
      const drugs = DRUGS.filter(currentComparisonGroup.match);
      const prevScroll = comparisonScroll.scrollLeft;
      compareTitle.textContent = `🦠 抗菌薬｜${currentComparisonGroup.label}`;
      comparisonScroll.innerHTML = renderComparisonTable(drugs);
      bindComparisonInteractions();
      comparisonScroll.scrollLeft = prevScroll;
    }

    function openComparison(group) {
      currentComparisonGroup = group;
      compareDetail.innerHTML = "";
      compareModal.classList.add("open");
      compareModal.setAttribute("aria-hidden", "false");
      refreshOpenComparison();
    }

    function closeComparison() {
      compareModal.classList.remove("open");
      compareModal.setAttribute("aria-hidden", "true");
      compareDetail.innerHTML = "";
    }

    function renderComparisonTable(drugs) {
      return `
        <table class="comparison-table">
          <thead>
            <tr>
              <th>項目</th>
              ${drugs.map(drug => {
                const selected = selectedDrugs.some(d => d.id === drug.id);
                return `
                <th>
                  <button type="button" class="drug-compare-btn" data-compare-drug="${escapeHtml(drug.id)}">${escapeHtml(drug.brands[0])}</button>
                  <div class="drug-compare-sub">${escapeHtml(drug.ingredientJa)}</div>
                  <div class="compare-head-actions">
                    <button type="button" class="compare-detail-btn" data-compare-drug="${escapeHtml(drug.id)}">詳細</button>
                    <button type="button" class="compare-select-btn${selected ? " selected" : ""}" data-compare-select="${escapeHtml(drug.id)}">${selected ? "✓ 選択中" : "＋ 選択"}</button>
                  </div>
                </th>
              `}).join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>妊娠<br>総合評価</td>
              ${drugs.map(drug => `<td>${compareBadge(drug.pregnancySummary, drug.pregnancyInsert, "pregnancy")}</td>`).join("")}
            </tr>
            <tr>
              <td>妊娠<br>添付文書</td>
              ${drugs.map(drug => `<td>${escapeHtml(getDisplayInsert(drug.pregnancyInsert))}</td>`).join("")}
            </tr>
            <tr>
              <td>授乳<br>総合評価</td>
              ${drugs.map(drug => `<td>${compareBadge(drug.lactationSummary, drug.lactationInsert, "lactation")}</td>`).join("")}
            </tr>
            <tr>
              <td>授乳<br>添付文書</td>
              ${drugs.map(drug => `<td>${escapeHtml(getDisplayInsert(drug.lactationInsert))}</td>`).join("")}
            </tr>
          </tbody>
        </table>
      `;
    }

    function compareBadge(summary, insert, axis) {
      const type = statusType(summary, insert, axis);
      return `<span class="badge ${badgeClass(type)}">${escapeHtml(summary)}</span>`;
    }

    function renderCompareDetail(drug) {
      const detail = DETAILS[drug.detailKey] || {};
      compareDetail.innerHTML = `
        <section class="detail-card open">
          <h3>${escapeHtml(drug.brands.join("、"))}｜${escapeHtml(drug.ingredientJa)}</h3>
          <div class="status-grid">
            ${statusBox("妊娠", drug.pregnancySummary, drug.pregnancyInsert, statusType(drug.pregnancySummary, drug.pregnancyInsert, "pregnancy"))}
            ${statusBox("授乳", drug.lactationSummary, drug.lactationInsert, statusType(drug.lactationSummary, drug.lactationInsert, "lactation"))}
          </div>
          <div class="detail-section">
            <h4>妊娠中</h4>
            <p>${escapeHtml(detail.pregnancy || "詳細情報は未登録です。")}</p>
          </div>
          <div class="detail-section">
            <h4>授乳中</h4>
            <p>${escapeHtml(detail.lactation || "詳細情報は未登録です。")}</p>
          </div>
          <div class="detail-section">
            <h4>実務ポイント</h4>
            <p>${escapeHtml(detail.point || "添付文書、ガイドライン、患者背景を確認してください。")}</p>
          </div>
          ${ridTable(drug.detailKey)}
        </section>
      `;
      bindMetricHelpButtons(compareDetail);
      compareDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }


    function openMetricHelp(metric) {
      const info = {
        rid: {
          title: "RID(%)：乳児相対投与量",
          body: `
            <p><strong>RID</strong>は、母親の体重あたり投与量に対して、乳児が母乳を介して受け取る量がどの程度かを示す目安です。</p>
            <p>一般に低いほど乳児曝露は少ないと考えます。実務上は10%未満なら比較的許容されやすい目安として扱われることがありますが、薬剤の毒性、乳児の月齢、早産児・腎機能などで判断は変わります。</p>
          `
        },
        mp: {
          title: "M/P比：乳汁/血漿中濃度比",
          body: `
            <p><strong>M/P比</strong>は、母体血漿中濃度に対して乳汁中濃度がどれくらいかを示す比です。</p>
            <p>1を超えると乳汁中に移行しやすい傾向を示します。ただし、M/P比だけでは乳児が実際に摂取する総量は分かりません。RIDや薬剤毒性、乳児側の条件と合わせて見ます。</p>
          `
        },
        half: {
          title: "T1/2(h)：半減期",
          body: `
            <p><strong>T1/2</strong>は薬物濃度が半分になるまでの時間です。</p>
            <p>長い薬剤は母体内・乳汁中に残りやすく、乳児への曝露が続きやすい可能性があります。1日1回投与薬では授乳タイミングの工夫でピークを避けられる場合もありますが、半減期が長いと効果は限定的です。</p>
          `
        }
      }[metric];

      if (!info) return;
      metricHelpTitle.textContent = info.title;
      metricHelpBody.innerHTML = `<div class="metric-help-content">${info.body}</div>`;
      metricHelpModal.classList.add("open");
      metricHelpModal.setAttribute("aria-hidden", "false");
    }

    function closeMetricHelp() {
      metricHelpModal.classList.remove("open");
      metricHelpModal.setAttribute("aria-hidden", "true");
    }

    function bindMetricHelpButtons(root = document) {
      root.querySelectorAll("[data-metric]").forEach(btn => {
        if (btn.dataset.metricBound === "1") return;
        btn.dataset.metricBound = "1";
        btn.addEventListener("click", (event) => {
          event.stopPropagation();
          openMetricHelp(btn.dataset.metric);
        });
      });
    }


    function renderGlobalSummaryV29() {
      const totalEl = document.getElementById("summaryTotalCount");
      const okEl = document.getElementById("summaryOk");
      const cautionEl = document.getElementById("summaryCaution");
      const unknownEl = document.getElementById("summaryUnknown");
      const mismatchEl = document.getElementById("summaryMismatch");
      if (!totalEl) return;

      const targets = Array.isArray(selectedDrugs) ? selectedDrugs : [];
      const counts = { ok: 0, caution: 0, unknown: 0, mismatch: 0 };

      targets.forEach(drug => {
        const type = strongestType(drug);
        if (type === "ok") counts.ok += 1;
        else if (type === "unknown") counts.unknown += 1;
        else if (type === "mismatch") counts.mismatch += 1;
        else counts.caution += 1;
      });

      totalEl.textContent = targets.length;
      if (okEl) okEl.textContent = counts.ok;
      if (cautionEl) cautionEl.textContent = counts.caution;
      if (unknownEl) unknownEl.textContent = counts.unknown;
      if (mismatchEl) mismatchEl.textContent = counts.mismatch;
    }

    function initClassButtons() {
      if (!classButtonsEl) return;
      const classes = [...new Set(DRUGS.map(d => d.className))];
      classButtonsEl.innerHTML = classes.map(c => `<button type="button" data-class="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("");
      classButtonsEl.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          input.value = btn.dataset.class;
          const items = DRUGS.filter(d => d.className === btn.dataset.class);
          renderSuggestions(items);
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }

    function escapeHtml(value) {
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    window.search = search;
    if (bottomAuditBtn) bottomAuditBtn.addEventListener("click", auditSelected);

    function setMode(mode) {
      currentMode = mode;
      modePregnancyBtn.classList.toggle("active", mode === "pregnancy");
      modeLactationBtn.classList.toggle("active", mode === "lactation");
      suggestionsEl.innerHTML = "";
      if (input.value.trim()) search();
      renderResults();
      renderGlobalSummaryV29();
    }

    function setModeKeepingResultPosition(mode) {
      if (mode === currentMode) return;

      const currentSummary = resultEl.querySelector(".rx-summary");
      const keepX = currentSummary ? currentSummary.scrollLeft : 0;
      const keepY = window.scrollY;

      setMode(mode);

      requestAnimationFrame(() => {
        const nextSummary = resultEl.querySelector(".rx-summary");
        if (nextSummary) nextSummary.scrollLeft = keepX;
        window.scrollTo({ top: keepY, left: 0, behavior: "auto" });

        requestAnimationFrame(() => {
          const latestSummary = resultEl.querySelector(".rx-summary");
          if (latestSummary) latestSummary.scrollLeft = keepX;
          window.scrollTo({ top: keepY, left: 0, behavior: "auto" });
        });
      });
    }

    function resultAreaIsVisible() {
      const rect = resultEl.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0 && selectedDrugs.length > 0;
    }

    modePregnancyBtn.addEventListener("click", () => {
      if (resultAreaIsVisible()) setModeKeepingResultPosition("pregnancy");
      else setMode("pregnancy");
    });
    modeLactationBtn.addEventListener("click", () => {
      if (resultAreaIsVisible()) setModeKeepingResultPosition("lactation");
      else setMode("lactation");
    });

    openBulkBtn.addEventListener("click", openBulkModal);
    closeBulkBtn.addEventListener("click", closeBulkModal);
    cancelBulkBtn.addEventListener("click", closeBulkModal);
    bulkModal.addEventListener("click", (event) => {
      if (event.target === bulkModal) closeBulkModal();
    });
    bulkInput.addEventListener("input", analyzeBulkInput);
    bulkInput.addEventListener("keyup", analyzeBulkInput);
    bulkInput.addEventListener("compositionend", analyzeBulkInput);
    addBulkBtn.addEventListener("click", addBulkSelected);

    if (collapseSearchBtn) {
      collapseSearchBtn.addEventListener("click", () => {
        const hidden = searchBody.style.display === "none";
        searchBody.style.display = hidden ? "" : "none";
        collapseSearchBtn.textContent = hidden ? "検索欄を隠す" : "検索欄を表示";
        if (hidden) input.focus();
      });
    }

    input.addEventListener("input", search);
    input.addEventListener("keyup", search);
    input.addEventListener("change", search);
    input.addEventListener("compositionend", search);


    window.addEventListener("error", (event) => {
      searchStatusEl.textContent = "エラー：" + event.message;
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      suggestionsEl.innerHTML = "";
      searchStatusEl.textContent = "2文字以上で候補を表示します。";
      input.focus();
    });

    clearSelectedBtn.addEventListener("click", () => {
      selectedDrugs = [];
      syncSelectionViews();
      searchBody.style.display = "";
      if (collapseSearchBtn) collapseSearchBtn.textContent = "隠す";
      input.focus();
    });

    auditBtn.addEventListener("click", auditSelected);

    initPinLock();
    initClassButtons();
    initCategoryBrowser();
    renderSelectedChips();

// Network-first service worker registration.
    // ブラウザ表示・ホーム画面追加後のWebアプリ表示のどちらでも、起動時に更新確認します。
    const APP_VERSION = "20260505-0047";

    if ("serviceWorker" in navigator) {
      let refreshing = false;

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

      window.addEventListener("load", async () => {
        try {
          const registration = await navigator.serviceWorker.register("./service-worker.js?v=" + APP_VERSION, {
            scope: "./",
            updateViaCache: "none"
          });

          // 起動直後に更新確認
          await registration.update();

          // 新しいSWが待機中なら即反映
          if (registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
          }

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        } catch (error) {
          console.warn("Service worker registration failed:", error);
        }
      });

      // ホーム画面アプリ復帰時にも更新確認
      document.addEventListener("visibilitychange", async () => {
        if (document.visibilityState !== "visible") return;
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) registration.update();
      });
    }
