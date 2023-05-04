from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# 创建浏览器对象
driver = webdriver.Chrome()

# 打开登录页面
driver.get("https://example.com/login")

# 输入用户名和密码
email = driver.find_element(By.NAME, "email")
email.send_keys("3501654994@qq.com")

password = driver.find_element(By.NAME, "password")
password.send_keys("18024532933wysbd")

# 提交登录表单
submit = driver.find_element(By.XPATH, "//button[@class='N44eQI_9']")
submit.click()
