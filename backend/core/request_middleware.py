from decouple import config

class RequestMiddleware:
  def __init__(self, get_response):
    self.get_response =  get_response
  
  def __call__(self, request):
    print(f"Request served by {config('INSTANCE')}...")
    return self.get_response(request)
  
