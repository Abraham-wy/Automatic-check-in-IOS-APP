import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
driver = webdriver.Chrome(options=chrome_options)

url = "https://www.iios.fun/login"
driver.get(url)

wait = WebDriverWait(driver, 10)

username = os.environ['USERNAME']
password = os.environ['PASSWORD']

email_elem = wait.until(EC.presence_of_element_located((By.ID, "email")))
email_elem.send_keys(username)

password_elem = wait.until(EC.presence_of_element_located((By.ID, "password")))
password_elem.send_keys(password)

submit_elem = wait.until(EC.presence_of_element_located((By.XPATH, "//button[contains(text(), '提交')]")))
submit_elem.click()

try:
    sign_in_elem = wait.until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(), '立即签到')]")))
    sign_in_elem.click()
except:
    print("签到失败")

driver.quit()
