<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>National Museum of the Philippines</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="header" id="MainHeader">
      <h2>National Museum of the Philippines</h2>
      <form class="search-container">
        <input type="text" placeholder="Search..." name="searchbarMain" />
        <button type="submit">Search</button>
      </form>
    </div>

    <div id="Museums">
      <!-- Will be populated on javascript -->
    </div>

    <div class="footnote">
      <input
        type="button"
        placeholder="AboutUs"
        value="About Us"
        onclick="aboutUs()"
      />
    </div>

    <?php
      $xml = preg_replace("/(<\/?)(\w+):([^>]*>)/", "$1$2$3", "<?xml version='1.0' encoding='UTF-8'?>
      <records>
        <record>
            <field name='name'>Sample 1</field>
            <field name='link'>Anthropology.html</field>
            <field name='image'>Mainimg/anthro.png</field>
            <field name='imageAlt'>Anthropology Museum</field>
        </record>
        <record>
            <field name='name'>Test</field>
            <field name='link'>FineArts.html</field>
            <field name='image'>Mainimg/fineArts.png</field>
            <field name='imageAlt'>Fine Arts Museum</field>
        </record>
      </records>");
      $json = json_encode(simplexml_load_string($xml, "SimpleXMLElement", LIBXML_NOCDATA));
    ?>
    <script>
      const xmlToJson = <?php print_r($json); ?>;
    </script>
    <script src="jscript.js" async defer></script>
  </body>
</html>
