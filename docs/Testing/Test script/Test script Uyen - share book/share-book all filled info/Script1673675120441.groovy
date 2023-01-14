import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:3000/')

WebUI.setText(findTestObject('Object Repository/Page_Share Book/input_Book Title_bookTitle'), bookTitle)

WebUI.setText(findTestObject('Object Repository/Page_Share Book/input_Book Author_bookAuthor'), bookAuthor)

WebUI.click(findTestObject('Object Repository/Page_Share Book/label_Cover photo'))

WebUI.click(findTestObject('Object Repository/Page_Share Book/label_Content photo'))

WebUI.click(findTestObject('Object Repository/Page_Share Book/label_Chapter 1 (first page)'))

WebUI.click(findTestObject('Object Repository/Page_Share Book/label_Last chapter (last page)'))

WebUI.setText(findTestObject('Object Repository/Page_Share Book/input_Address_address'), bookAddress)

WebUI.click(findTestObject('Object Repository/Page_Share Book/button_Upload'))

