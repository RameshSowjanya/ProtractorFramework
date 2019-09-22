let homepage = require('../pages/homepage.js')

describe('demo calulator test',function(){
   
    it('addition test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //browser.get('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000);
        homepage.enterFirstNumber(4);
        homepage.enterSecondNumber(5);
        //element(by.model('first')).sendKeys('2');
        //element(by.model('second')).sendKeys('4');
        homepage.clickGo();
        //element(by.id('gobutton')).click();
        homepage.verifyResult('9');
        //expect(element(by.className('ng-binding')).getText()).toEqual('6');
        
        //browser.driver.manage().window().setSize(1366, 728);
        
      
    });

    it('substraction test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        //browser.get('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000);
        homepage.enterFirstNumber(4);
        homepage.enterSecondNumber(5);
        //element(by.model('first')).sendKeys('2');
        //element(by.model('second')).sendKeys('4');
        homepage.clickGo1();
        //element(by.id('gobutton')).click();
        homepage.verifyResult('9');
        //expect(element(by.className('ng-binding')).getText()).toEqual('6');
        
        //browser.driver.manage().window().setSize(1366, 728);
        
      
    });

    /* it('substraction test',function(){

    }); */
});