import requests


r=requests.post("http://localhost:3000/api/v1/articles",data={"name":"tiger cat","data":"A tasmanian tiger cat has been spotted","image_url":"bruh"})
print(r.text)