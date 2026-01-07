<html lang="en-US">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>AllSTEM Header &amp; Footer</title>
    <link rel="stylesheet" href="header-footer.min.css"/>
    <script src="navigation.min.js" type="module" defer></script>
    <script src="header-footer.min.js" defer></script>
  </head>
  <body class="header-sticky smooth-scroll" style="margin:0;padding:0;">
    <?php include 'header.html'; ?>
    <main class="is-layout-constrained has-outfit-font-family" style="background:var(--wp--preset--gradient--actone-brand-gradient-1);padding:var(--wp--preset--spacing--xx-large) var(--wp--preset--spacing--medium);">
      <div class="wp-block-group alignwide">
        <h1>Welcome to AllSTEM Header &amp; Footer</h1>
        <p>This is a sample page to demonstrate the header and footer functionality.</p>
        <p>Scroll down to see the sticky header in action.</p>
        <div style="height: 1000px;"></div>
      </div>
    </main>
    <?php include 'footer.html'; ?>
  </body>
</html>