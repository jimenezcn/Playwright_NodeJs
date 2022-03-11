import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  //Setup the web site that will be open
  await page.goto('https://bc-advra-102.central.bccr.fi.cr/csp/gateway/portal/#/consumer');
});

test.describe('Test Suits - Servers Auto Provisioning', () => {

  test('VMWare site availability verification', async ({ page }) => {

    //GetCurrent date and time to create folder name
    const currentDate = new Date();
    const yearMonthDay = currentDate.getFullYear()+'-'+("0" + (currentDate.getMonth())).slice(-2) + '-'+("0" + (currentDate.getDay()-1)).slice(-2);
    const hourMinSec = ("0" + (currentDate.getHours())).slice(-2)+'_'+("0" + (currentDate.getMinutes())).slice(-2)+'_'+("0" + (currentDate.getSeconds())).slice(-2);
    const fileName = yearMonthDay + ' ' + hourMinSec;

    var logs = "Test Starts at: " + fileName + '\n';
    
    //Print on console test begins
    logs += "Open VMWare site to verify availability, started" + '\n' + '\n';;

    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(5000);

    //Verify that page was loaded correctly
    const statusResult = page.url().includes("102.central.bccr.fi.cr");

    if ( statusResult ) {
      logs += "Page loaded as expected" + '\n';
    }
    else {
      logs += "Error when trying to load the Page" + '\n';
    }
    
    //Take screenshot
    await page.screenshot({ path: './TestScreenshots/Site Availability Check/' +  fileName + '/01 - Page Loaded.png' })
    //Click Next button to continue to LogIn Page
    await page.click("text=Next")
    //Concatenate logs messages
    logs += "Next button clicked" + '\n';
    
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(3000);
    //Take screenshot
    await page.screenshot({ path: './TestScreenshots/Site Availability Check/' +  fileName + '/02- LogIn page.png' })

    //Closing the web browser
    page.close();

    //Concatenate logs messages
    logs += "Test: Open VMWare site to verify availability, finished" + '\n';
    console.log(logs);

  });


  test('Create: W2016-PROD-Capacitacion.local, Server', async ({ page }) => {

    //GetCurrent date and time for File name
    const currentDate = new Date();
    const yearMonthDay = currentDate.getFullYear()+'-'+("0" + (currentDate.getMonth())).slice(-2) + '-'+("0" + (currentDate.getDay()-1)).slice(-2);
    const hourMinSec = ("0" + (currentDate.getHours())).slice(-2)+'_'+("0" + (currentDate.getMinutes())).slice(-2)+'_'+("0" + (currentDate.getSeconds())).slice(-2);
    const fileName = yearMonthDay + ' ' + hourMinSec;

    var logs = "Test Start at: " + fileName + '\n';

    //Print on console test begins
    logs += "Test: Create: W2016-PROD-Capacitacion.local, Server, started"+'\n'+'\n';
    
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(5000);
    //Take screenshot
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/1 - Next Button.png' })
    //Click Next button to continue to LogIn Page
    await page.click("text=Next");
    logs += "Next button clicked to move to Log In page"+'\n';
    
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(3000);
    //Enter Username on the field
    const username = await page.$("#username");
    await username?.type("jimenezcn");
    logs += "Username entered"+'\n';
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(1000);
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/2 - Username entered.png' })

    //Enter Password on the field
    await page.fill( "input[name='password']" , '*2022Doctor' );
    await page.waitForTimeout(1000);
    logs += "user password entered"+'\n';
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/3 - Password entered.png' })

    //Click SignIn button to continue to main module
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/4 - Sign In button clicked.png' })
    await page.click("text=Sign in");
    logs += "Sign In button clicked to proceed with login into system"+'\n';

    //Click on Service Broker Option
    await page.click("text=Service Broker");
    logs += "Service broker button clicked to enter that module"+'\n';

    //Enter to search button name
    await page.fill( "input[name='searchValue']" , 'W2016-PROD-Capacitacion.local' );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/5 - Server search.png' })
    logs += "Search Server button performed"+'\n';

    //Click on Request button on the button from Catalog
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/6 - Click on request button from catalog item.png' })
    await page.click("text=Request");
    logs += "Request button clicked to begin server process provisioning"+'\n';

    //GENERAL MODULE
    //Enter Numer de Solicitud
    await page.fill( "input[id='input_General~NumeroSolicitud']" , "123" );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/7 - Enter - Numero de solicitud.png' })
    logs += "Numero de solicitud entered: "+123+'\n'; 

    //Enter Solicitante
    await page.fill( "input[id='input_General~Solicitante']" , "Ney Fred Jimenez" );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/8 - Enter - Solicitante.png' })
    logs += "Solicitante entered: "+"Ney Fred Jimenez Campos"+'\n';

    //Select Tamano - MEDIUM
    await page.selectOption('[id="input_General~Size"]', { label : 'MEDIUM' } );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/9 - Select - Size.png' })
    logs += "Size selected: "+"MEDIUM"+'\n';
    
    //DETALLE MODULE
    await page.click('text=Detalle')
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/10 - Select - Detalle module.png' })
    logs += "Moving to: Detalle Module"+'\n';

    //Select institucion
    await page.selectOption('[id="input_General~Institucion"]', { label: "AAAAA" } );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/11 - Select - Institucion.png' })
    logs += "Institucion selected: SUGEF"+'\n';

    //Select Rol - MIDLE
    await page.selectOption('[id="input_General~Rol"]', { label: "Infraestructura" } );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/12 - Select - Rol.png' })
    logs += "Rol selected: Infraestructura"+'\n';

    //Select Sistema - Kafka
    await page.selectOption('[id="input_General~Sistema"]', {label: 'Kafka'});
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/13 - Select - Sistema.png' })
    logs += "Sistema selected: Kafka"+'\n';

    //Select Ubicacion - CPDP
    await page.selectOption('[id="input_General~Ubicacion"]', { label: 'CPDP' } );
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/14 - Select - Ubicacion.png' })
    logs += "Ubicacion selected: CPDP"+'\n';

    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(5000);

    //Submit button
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/15 - Click - Submit button.png' })
    await page.click('text=Submit');
    logs += "Submit button clicked, server provisioning process started"+'\n';
    
    //Process will check if URL after submit is the following, otherwise will fail the test.
    await page.waitForURL('https://bc-advra-102.central.bccr.fi.cr/catalog/#/workload/deployment');
    await page.screenshot({ path: './TestScreenshots/W2016-PROD-Capacitacion.local/' +  fileName + '/16 - Deployments - Server creation start.png' })
    await page.waitForTimeout(3000);

    await page.close()
    //Print on console test begins
    logs += "Test: Create: W2016-PROD-Capacitacion.local, Server, finsihed"+'\n';
    console.log(logs);

} );



/*
  test('Create: W2016-PROD-APP-SINPE.CR, Server', async ({ page }) => {

    //Print on console test begins
    console.log("Test Start");

    //Click Next button to continue to LogIn Page
    await page.click("text=Next");
    
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(3000);
    //Enter Username on the field
    const username = await page.$("#username");
    await username?.type("jimenezcn");
    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(1000);

    //Enter Password on the field
    await page.fill( "input[name='password']" , '*2022Doctor' );
    await page.waitForTimeout(1000);

    //Click SignIn button to continue to main module
    await page.click("text=Sign in");


    //Click on Service Broker Option
    await page.click("text=Service Broker");

    //Enter to search button name
    await page.fill( "input[name='searchValue']" , 'SINPE' );

    //Click on Request button on the button from Catalog
    await page.click("text=Request");


    //GENERAL MODULE
    //Enter Numer de Solicitud
    await page.fill( "input[id='input_General~NumeroSolicitud']" , "123" );
        
    //Enter Solicitante
    await page.fill( "input[id='input_General~Solicitante']" , "Ney Fred Jimenez" );

    //Select Tamano - MEDIUM
    await page.selectOption('[id="input_General~Size"]', { label : 'MEDIUM' } );
    
    
    //DETALLE MODULE
    await page.click('text=Detalle')

    //Select Rol - MIDLE
    await page.selectOption('[id="input_General~Rol"]', { label: "Infraestructura" } );

    //Select Sistema - Kafka
    await page.selectOption('[id="input_General~Sistema"]', {label: 'Kafka'});

    //Select Ubicacion - CPDP
    await page.selectOption('[id="input_General~Ubicacion"]', { label: 'CPDP' } );


    //RED MODULE
    await page.click('body > cs-catalog-ui-app > clr-main-container > div > main > ng-component > div > div.content-area > form > section.content-section > cs-custom-forms > cf-renderer-main > cf-container-fluid > ul > cf-nav:nth-child(4) > li > a')

    //Select VLAN - Infraestructura SINPE (2133)
    await page.selectOption('[id="input_Networking~VLAN"]', '1: JTdCJTIydmFsdWUlMjIlM0ElMjIyMTMzJTIyJTdE');


    //Wait time in milisecons that system will do before moving to the next code line to be executed
    await page.waitForTimeout(5000);

    //Submit button
    //await page.click('text=Submit');

    
    //Process will check if URL after submit is the following, otherwise will fail the test.
    //await page.waitForURL('https://bc-advra-102.central.bccr.fi.cr/catalog/#/workload/deployment');

    //await page.close()
    //console.log('Server build started');

} );
*/

});
