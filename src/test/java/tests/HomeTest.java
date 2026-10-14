package tests;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class HomeTest {
    private ChromeDriver driver;

    @BeforeMethod
    public void setUp(){
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Test
    public void testHomePage(){
        driver.get("https://practicesoftwaretesting.com/");
        String title = driver.getTitle();
        assert title.equals("Practice Software Testing - Toolshop");
    }

    @AfterMethod
    public void tearDown(){
        if(driver != null){
            driver.quit();
        }
    }
}
