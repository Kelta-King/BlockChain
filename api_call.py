import requests

url = 'https://keltaedu.tech/Action/scanner_check.php'
myobj = {'details': 'yoman'}

x = requests.post(url = url, data = myobj)

#print the response text (the content of the requested file):

print(x.text)