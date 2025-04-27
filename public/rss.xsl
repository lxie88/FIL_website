<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          body {
            max-width: 900px;
            margin: 0 auto;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            padding: 2rem;
            line-height: 1.5;
            color: #374151;
            background: #f9fafb;
          }
          h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 2rem 0 1rem;
            color: #1f2937;
          }
          .description {
            font-size: 1.125rem;
            color: #4b5563;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
          }
          .post {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          }
          .post:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .post h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
          }
          .post a {
            color: #2563eb;
            text-decoration: none;
          }
          .post a:hover {
            text-decoration: underline;
          }
          .post p {
            margin: 0.5rem 0;
            color: #4b5563;
          }
          .date {
            font-size: 0.875rem;
            color: #6b7280;
          }
          @media (max-width: 768px) {
            body {
              padding: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <div class="description">
          <xsl:value-of select="/rss/channel/description"/>
        </div>
        
        <div class="posts">
          <xsl:for-each select="/rss/channel/item">
            <div class="post">
              <h3>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <p><xsl:value-of select="description"/></p>
              <p class="date">
                <xsl:value-of select="pubDate"/>
              </p>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet> 