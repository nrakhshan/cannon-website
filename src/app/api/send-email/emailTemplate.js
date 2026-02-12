exports.emailTemplateBuilder = (
  name,
  email,
  message
) => {
  return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
@import url(https://fonts.googleapis.com/css?family=Poppins:400,700);
        </style>
      <!--<![endif]-->

    
    
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    </style>
    
  
    <style type="text/css">
    
    

    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  
    </style>
    <style type="text/css">
    .hide_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { 
            .hide_section_on_mobile { 
                display: table !important;
            } 

            div.hide_section_on_mobile { 
                display: block !important;
            }
        }
        .hide_on_desktop { display: block !important;} 
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop { 
            display: table !important;
            width: 100%;
        } 
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
        
          p, h1, h2, h3 {
              margin: 0px;
          }

          ul, li, ol {
            font-size: 11px;
            font-family: Ubuntu, Helvetica, Arial;
          }

          a {
              text-decoration: none;
              color: inherit;
          }

        @media only screen and (max-width:480px) {
            .mj-column-per-100 { width:100%!important; max-width:100%!important; }.mj-column-per-100 > .mj-column-per-100 { width:100%!important; max-width:100%!important; }
        }

        .mj-column-per-100 [class^="mj-column-per-"] {
            line-height: normal;
        }

        .mj-button-full a {
            display: block !important;
        }
    </style>
    
  </head>
  <body style="word-spacing:normal;background-color:#EAEEF3;">
    
    
      <div style="background-color:#EAEEF3;">
        
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#00275C" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->

      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EAEEF3;width:100%;max-width:600px;">
        <tbody>
        <tr>
          <td height="40" style="height:40px;line-height:40px;font-size:0;background:#EAEEF3;">&nbsp;</td>
        </tr>
        </tbody>
      </table>
      
      <div style="background:#00275C;background-color:#00275C;margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00275C;background-color:#00275C;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="center" style="font-size:0px;padding:0px 0px 0px 0px;word-break:break-word;">
                  
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
        <tbody>
          <tr>
            <td style="width:108px;">
              
      <img src="https://github.com/nrakhshan/cannon-website/blob/fix/contact-form/public/assets/logo-white.png?raw=true" style="border:0;border-radius:0px 0px 0px 0px;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="108" height="auto">
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="left" style="font-size:0px;padding:15px 40px 15px 40px;word-break:break-word;">
                  
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:2;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px;"><span style="font-size: 17px; color: rgb(45, 34, 91);"><span style="font-family: Poppins, sans-serif;"><strong>${name} has sent you a message via the Cannon website</strong></span><br></span></p>
<p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px;"> </p>
    <p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px;margin: 0px 20px;"><span style="font-family: Georgia, sans-serif;"><span style="color: #2d225b;"><span style="font-size: 17px;">${message}</span></span></span></p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#FFFFFF" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0px 20px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="left" style="font-size:0px;padding:15px 40px 20px 40px;word-break:break-word;">
                  
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px;"><span style="color: rgb(45, 34, 91); font-size: 14px; font-family: Poppins, sans-serif;">Send them a reply at ${email}</span></p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#EAEEF3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="background:#EAEEF3;background-color:#EAEEF3;margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EAEEF3;background-color:#EAEEF3;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0px 0px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="center" style="font-size:0px;padding:10px 10px 10px 10px;word-break:break-word;">
                  
      
     <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                <tbody>
                  
      <tr>
        <td style="padding:4px;vertical-align:middle;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:28px;">
            <tbody>
              <tr>
                <td style="font-size:0;height:28px;vertical-align:middle;width:28px;">
                  <a href="https://www.instagram.com/thecannonuoft/" target="_blank" style="color: #0000EE;">
                    <img height="28" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/ikony-black/simpleblack/instagram.png" style="border-radius:3px;display:block;" width="28">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        
      </tr>
    
                </tbody>
              </table>
            <!--[if mso | IE]></td><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                <tbody>
                  
      <tr>
        <td style="padding:4px;vertical-align:middle;padding-top: 4px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:transparent;border-radius:3px;width:28px;">
            <tbody>
              <tr>
                <td style="font-size:0;height:28px;vertical-align:middle;width:28px;">
                  <a href="https://discord.gg/FSwwhMqPPe" target="_blank" style="color: #0000EE;">
                    <img height="28" src="https://cdn.rcd.gg/PreMiD/websites/D/Discord/assets/0.png" style="border-radius:3px;display:block;" width="28">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        
      </tr>
    
                </tbody>
              </table>
            <!--[if mso | IE]></td><td><![endif]-->
              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                <tbody>
                  
                </tbody>
              </table>
            <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
                </td>
              </tr>
            
              <tr>
                <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                  
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.2;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px; text-align: center;"><span style="font-size: 13px; color: rgb(45, 34, 91); font-family: Poppins, sans-serif;">www.cannon.skule.ca</span></p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#EAEEF3" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="background:#EAEEF3;background-color:#EAEEF3;margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#EAEEF3;background-color:#EAEEF3;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0px 0px 10px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                  
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, Helvetica, Arial; font-size: 11px; text-align: center;"><span style="font-family: Poppins, sans-serif;">© 2025 The Cannon. All rights reserved.</span></p></div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      </div>
    
  </body>
</html>`}