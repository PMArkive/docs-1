import{_ as e,o,c as l,a as t}from"./app.382d55ed.js";const f=JSON.parse('{"title":"GOKZ global whitelist guide","description":"Guide for GOKZ on how to get your server globally whitelisted","frontmatter":{"title":"GOKZ global whitelist guide","description":"Guide for GOKZ on how to get your server globally whitelisted"},"headers":[{"level":2,"title":"Before you begin","slug":"before-you-begin"},{"level":2,"title":"1. Install SteamWorks","slug":"_1-install-steamworks"},{"level":2,"title":"2. Install GlobalAPI plugin","slug":"_2-install-globalapi-plugin"},{"level":2,"title":"3. Verify installation","slug":"_3-verify-installation"},{"level":2,"title":"4. Verify configuration of the server","slug":"_4-verify-configuration-of-the-server"},{"level":2,"title":"5. Apply for an API key","slug":"_5-apply-for-an-api-key"},{"level":2,"title":"6. Posting an application","slug":"_6-posting-an-application"}],"relativePath":"guides/global-gokz.md"}'),a={name:"guides/global-gokz.md"},r=t('<h1 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h1><ul><li>Server owners cannot be globally banned or have a previous global ban.</li><li>Must not be a LAN or locally-hosted server. Regardless of whether it&#39;s open to the public.</li><li>If the server is going to be password protected or SteamID/group whitelisted, then replay bot files must be accessible to the Global Team. The Global Team must be able to access the server (add them to the whitelist or share the password).</li><li>You have read, understood and comply with the <a href="https://forum.gokz.org/p/server-rules" target="_blank" rel="noreferrer">Global Server Owner Code of Conduct</a>.</li></ul><h2 id="before-you-begin" tabindex="-1">Before you begin <a class="header-anchor" href="#before-you-begin" aria-hidden="true">#</a></h2><ol><li>This guide assumes that you have a working GOKZ server.</li><li>This guide assumes that you have access to the server files.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are asked to overwrite files at any point in the guide, accept the overwrites.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are having trouble with a step, try the <strong>#support</strong> channel in <a href="https://discord.gg/csgokz" target="_blank" rel="noreferrer">our Discord server</a>. <br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from <code>csgo/addons/sourcemod/logs/errors_********.log</code>.</p></div><h2 id="_1-install-steamworks" tabindex="-1">1. Install SteamWorks <a class="header-anchor" href="#_1-install-steamworks" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading <a href="http://users.alliedmods.net/~kyles/builds/SteamWorks" target="_blank" rel="noreferrer">SteamWorks</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have SteamWorks installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Run the following command in the server console: <code>sm exts load SteamWorks</code>. <br>You should see the following line in the output: <code>[SM] Loaded extension SteamWorks.ext.so successfully.</code>.</p></div><h2 id="_2-install-globalapi-plugin" tabindex="-1">2. Install GlobalAPI plugin <a class="header-anchor" href="#_2-install-globalapi-plugin" aria-hidden="true">#</a></h2><ol><li><p>Start by downloading <a href="https://bitbucket.org/kztimerglobalteam/globalapi-smplugin/downloads" target="_blank" rel="noreferrer">GlobalAPI-SMPlugin</a>.</p></li><li><p>Extract the files into your server&#39;s <code>csgo</code> directory.</p></li><li><p>You should now have GlobalAPI-SMPlugin installed and working.</p></li></ol><div class="info custom-block"><p class="custom-block-title">Confirm this step</p><p>Restart your server and type <code>sm plugins list</code> in the server console. <br>You should see the following line in the output: <code>GlobalAPI (2.0.4)</code>.</p></div><h2 id="_3-verify-installation" tabindex="-1">3. Verify installation <a class="header-anchor" href="#_3-verify-installation" aria-hidden="true">#</a></h2><p>Once you have installed the above, type <code>!globalcheck</code> in chat.</p><p>You should see output being the following:</p><p><span style="color:#36EE56;">KZ</span> | Global Records Availability Check<br> API Key <span style="color:#FF0B00;">X</span> | Plugins <span style="color:#36EE56;">\u2713</span> | Settings Enforcer <span style="color:#36EE56;">\u2713</span> | Map <span style="color:#36EE56;">\u2713</span> | You <span style="color:#FF0B00;">X</span><br><span style="color:#BA83E9;">Vanilla</span> <span style="color:#36EE56;">\u2713</span> | <span style="color:#BA83E9;">SimpleKZ</span> <span style="color:#36EE56;">\u2713</span> | <span style="color:#BA83E9;">KZTimer</span> <span style="color:#36EE56;">\u2713</span></p><h2 id="_4-verify-configuration-of-the-server" tabindex="-1">4. Verify configuration of the server <a class="header-anchor" href="#_4-verify-configuration-of-the-server" aria-hidden="true">#</a></h2><p>Install the <a href="https://bitbucket.org/kztimerglobalteam/kzserveradvisor" target="_blank" rel="noreferrer">KZ Server Advisor Plugin</a>.</p><p>Use the <code>sm_kzserveradvisor_gokz</code> command.</p><p>Check the log file made in <code>csgo/addons/sourcemod/logs/L********.log</code>.</p><p>The output must show <strong>OKAY</strong> or <strong>PASS</strong> for all tests. Rectify any issues and run the command again.</p><h2 id="_5-apply-for-an-api-key" tabindex="-1">5. Apply for an API key <a class="header-anchor" href="#_5-apply-for-an-api-key" aria-hidden="true">#</a></h2><ol><li>Sign in to the <a href="https://portal.global-api.com/dashboard/servers/owned" target="_blank" rel="noreferrer">GlobalAPI portal</a>.</li><li>After logging in, click &quot;New Server&quot;.</li><li>Fill in your server&#39;s details and press &quot;Apply&quot;.</li><li>Once you&#39;ve applied, you will see the server listed.</li><li>Note the server&#39;s id, you will need it in the next steps.</li><li>Click on the arrow on the left of the server and copy your API key.</li><li>Paste the API key as is into <code>csgo/cfg/sourcemod/globalapi-key.cfg</code>.</li></ol><h2 id="_6-posting-an-application" tabindex="-1">6. Posting an application <a class="header-anchor" href="#_6-posting-an-application" aria-hidden="true">#</a></h2><ol><li>Login to the <a href="https://forum.gokz.org/login" target="_blank" rel="noreferrer">GOKZ forum</a>.</li><li>Start a discussion in the <a href="https://forum.gokz.org/t/ss-application" target="_blank" rel="noreferrer">Server Application</a> section.</li><li>Title the application as your server&#39;s name.</li><li>Replace the post content with your information.</li></ol><p>The Global Team will then review your application and advise you further if necessary.</p>',26),i=[r];function s(n,c,p,d,h,u){return o(),l("div",null,i)}const b=e(a,[["render",s]]);export{f as __pageData,b as default};
