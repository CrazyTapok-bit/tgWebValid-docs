import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-CBs6Aohp.js";const t={},p=e(`<p>We try to display as complete an example as possible, which you will most likely use.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>TgWebValid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>BotConfig</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>BotException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>ValidationException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Exception</span><span class="token punctuation">;</span>

<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** I specify the default settings */</span>
    <span class="token variable">$tgWebValid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TgWebValid</span><span class="token punctuation">(</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** I will set up another additional bot to work with them */</span>
    <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">addBot</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BotConfig</span><span class="token punctuation">(</span>
      <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span><span class="token punctuation">,</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN_2&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token doc-comment comment">/**
     * I use the default bot
     * and call the desired type of verification
     */</span>
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">validateLoginWidget</span><span class="token punctuation">(</span>
      <span class="token argument-name">user</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token doc-comment comment">/** User data */</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * If the check is successful,
     * I will display the LoginWidget entity with data about the user
     */</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token doc-comment comment">/**
     * Or, I specify which bot I want to work with
     * and call the desired type of verification
     */</span>
    <span class="token variable">$initData</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span><span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">validateInitData</span><span class="token punctuation">(</span>
      <span class="token argument-name">initData</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;query_id=...&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** If the check is successful, I will output the InitData entity with all the data */</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$initData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ValidationException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// I will get a validation exception if the check is failed</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BotException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Having made a mistake with the name of the bot, I will catch this exception</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// I will process other errors if there are any</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function o(l,c){return s(),a("div",null,i)}const r=n(t,[["render",o],["__file","example.html.vue"]]),m=JSON.parse('{"path":"/en/docs/example.html","title":"Full example","lang":"en-US","frontmatter":{"title":"Full example","icon":"bolt","order":5,"description":"We try to display as complete an example as possible, which you will most likely use. ","head":[["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/example.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/en/docs/example.html"}],["meta",{"property":"og:site_name","content":"The PHP library for validate Telegram users"}],["meta",{"property":"og:title","content":"Full example"}],["meta",{"property":"og:description","content":"We try to display as complete an example as possible, which you will most likely use. "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:updated_time","content":"2024-01-05T07:23:15.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-01-05T07:23:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Full example\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-05T07:23:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]]},"headers":[],"git":{"createdTime":1704439395000,"updatedTime":1704439395000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.72,"words":216},"filePathRelative":"en/docs/example.md","localizedDate":"January 5, 2024","autoDesc":true}');export{r as comp,m as data};
