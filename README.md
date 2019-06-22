<h1><a id="Trader_Indicators_0"></a>Trader Indicators</h1>
<p><a href="https://www.npmjs.com/package/trader-indicators"><img src="http://i65.tinypic.com/2dtvm89.jpg" alt="N|Solid"></a></p>
<p><strong>Trader Indicators</strong> é um ferramenta que ajuda na buscar diversas solicitações, em métodos publicos de diversas exchanges, facilitando a ultilização com outras ferramentas já existentes, podendo servi dados para <em>Trade Developer</em> ou seja  trades que criam suas própias ferramentas de automação de bots.</p>
<h3><a id="Instalao_7"></a>Instalação:</h3>
<p>você pode ultilizar dois gerenciadore de pacotes o npm ou o yarn</p>
<pre><code class="language-sh">$ npm install trader-indicators --save
ou
$ yarn add trader-indicators
</code></pre>
<h3><a id="Exchanges_e_mtodos_suportados_16"></a>Exchanges e métodos suportados:</h3>
<p>*apenas métodos public das exchanges são suportados dispensando dados de API ou autenticação</p>
<h5><a id="Poloniex__httpspoloniexcom_18"></a>Poloniex:  <a href="https://poloniex.com">https://poloniex.com</a></h5>
<p>… returnChartData:</p>
<pre><code class="language-js"><span class="hljs-keyword">const</span> traderIndicators = <span class="hljs-built_in">require</span>(<span class="hljs-string">"trader-indicators"</span>);
<span class="hljs-keyword">let</span> pair = <span class="hljs-string">"btc_eth"</span>;
<span class="hljs-keyword">let</span> time = <span class="hljs-string">"30m"</span>;
<span class="hljs-keyword">let</span> period =  <span class="hljs-string">"5m"</span>;
<span class="hljs-comment">/*
 * Essa função retorna o ChartDatado traderview.
 * @pair é o par de moeda ex:'btc_atom','eth_xmr','usdt_btc'
 * @time é o tempo de buscar ou seja ex:'30m' 30 minutos da data atual pra tras
 *@period é o period de busca dentro do time ex:'5m' buscar a cada 5 minuto dentro de time;
 * @return: retorna um json
  exemplo de retorno: 
    date: 1561226425,
    high: 0.0287641,
    low: 0.0287641,
    open: 0.0287641,
    close: 0.0287641,
    volume: 0,
    quoteVolume: 0,
    weightedAverage: 0.0287641
  */</span>
traderIndicators.returnChartData(pair, time, period, (err, result) =&gt; {
  <span class="hljs-built_in">console</span>.log(err, result);
});
<span class="hljs-comment">/*
*@help buscar todos os  atributos suportados 'time e period'
*/</span>
traderIndicators.returnChartData(<span class="hljs-string">'help'</span>, (err, result) =&gt; {
  <span class="hljs-built_in">console</span>.log(err, result);
});
</code></pre>
<h2><a id="License_55"></a>License</h2>
<p>MIT</p>
<h1><a id="Projeto_em_desenvovimento_61"></a>Projeto em desenvovimento…</h1>
