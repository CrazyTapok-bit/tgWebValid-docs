import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-Dxs6hYG-.js";const t={},p=e(`<p>我们尝试展示尽可能完整的示例，您很可能会使用该示例。</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>TgWebValid</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>BotException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">TgWebValid<span class="token punctuation">\\</span>Exceptions<span class="token punctuation">\\</span>ValidationException</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Exception</span><span class="token punctuation">;</span>

<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 
     * 我指定令牌设置并启用异常处理
     */</span>
    <span class="token variable">$tgWebValid</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TgWebValid</span><span class="token punctuation">(</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">throw</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 我将设置另一个额外的机器人来与他们合作 */</span>
    <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">addBot</span><span class="token punctuation">(</span>
      <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span><span class="token punctuation">,</span>
      <span class="token argument-name">token</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;TELEGRAM_BOT_TOKEN_2&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 我使用默认机器人 */</span>
    <span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 或者，指定我想要使用哪个机器人 */</span>
    <span class="token variable">$bot</span> <span class="token operator">=</span> <span class="token variable">$tgWebValid</span><span class="token operator">-&gt;</span><span class="token function">bot</span><span class="token punctuation">(</span>
      <span class="token argument-name">name</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;secondary&#39;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token doc-comment comment">/**
     * 调用 validateLoginWidget 方法，
     * 检查从 Telegram Login Widget 收到的数据
     */</span>
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$bot</span><span class="token operator">-&gt;</span><span class="token function">validateLoginWidget</span><span class="token punctuation">(</span>
      <span class="token argument-name">user</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token doc-comment comment">/** 用户数据 */</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 如果检查成功，
     * 我将显示包含所有用户数据的 LoginWidget 实体
     */</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$user</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ValidationException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果检查失败，我将收到验证异常</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BotException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 由于机器人名称错误，我会捕获此异常</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果有其他错误我会处理</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","login-winget.html.vue"]]),m=JSON.parse('{"path":"/zh/docs/example/login-winget.html","title":"登录小部件","lang":"zh-CN","frontmatter":{"title":"登录小部件","icon":"right-to-bracket","order":2,"head":[["meta",{"name":"description","content":"如何验证通过 Telegram Login Widget 收到的数据 - PHP"}],["link",{"rel":"alternate","hreflang":"uk-ua","href":"https://tgwebvalid.com/docs/example/login-winget.html"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://tgwebvalid.com/en/docs/example/login-winget.html"}],["meta",{"property":"og:url","content":"https://tgwebvalid.com/zh/docs/example/login-winget.html"}],["meta",{"property":"og:site_name","content":"用于验证 Telegram 用户的 PHP 库"}],["meta",{"property":"og:title","content":"登录小部件"}],["meta",{"property":"og:description","content":"我们尝试展示尽可能完整的示例，您很可能会使用该示例。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"uk-UA"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-19T06:43:02.000Z"}],["meta",{"property":"article:author","content":"Mr. Anonymous"}],["meta",{"property":"article:modified_time","content":"2024-04-19T06:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"登录小部件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T06:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr. Anonymous\\",\\"url\\":\\"https://github.com/CrazyTapok-bit\\"}]}"]],"description":"我们尝试展示尽可能完整的示例，您很可能会使用该示例。"},"headers":[],"git":{"createdTime":1713508982000,"updatedTime":1713508982000,"contributors":[{"name":"Сергій","email":"61122611+CrazyTapok-bit@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"zh/docs/example/login-winget.md","localizedDate":"2024年4月19日","autoDesc":true}');export{d as comp,m as data};
