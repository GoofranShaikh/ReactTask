from django.shortcuts import render,redirect
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics,status
from .models import Account
from.serializers import AccountSerializers
from django.http import HttpResponse
# Create your views here.

def Hello(request):
   return HttpResponse("<h1>This is the Home Page</h1><br> <a href=http://127.0.0.1:8000/Accounts>click Me</a>" )
    


#/Accounts
# class AccountApiView(generics.ListCreateAPIView):
#     queryset = Account.objects.all()                    #Bring all the data from account table
#     serializer_class = AccountSerializers

# @api_view(["PUT"])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
# def update_customer(request,customer_id):
#     user = request.user.id
#     payload = json.loads(request.body)
#     try:
#         Account_item = Account.objects.filter(added_by=user, id=customer_id)
#         # returns 1 or 0
#         Account_item.update(**payload)
#         customerDetail = Account.objects.get(id=customer_id)
#         serializer = AccountSerializers(customerDetail)
#         return JsonResponse({'book': serializer.data}, safe=False, status=status.HTTP_200_OK)
#     except ObjectDoesNotExist as e:
#         return JsonResponse({'error': str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND)
#     except Exception:
#         return JsonResponse({'error': 'Something terrible went wrong'}, safe=False, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(['GET'])
def getAccount(request):
    getMethod=Account.objects.all()
    Account_Serializer=AccountSerializers(getMethod, many=True)
    return Response(Account_Serializer.data)

@api_view(['GET'])
def getIndividualAccount(request, pk):
    getMethod=Account.objects.get(id=pk)
    Account_Serializer=AccountSerializers(getMethod, many=False)
    return Response(Account_Serializer.data)

@api_view(['POST'])
def createAccount(request):
    Account_Serializer=AccountSerializers(data=request.data)
    if Account_Serializer.is_valid():
        Account_Serializer.save()
    return Response(Account_Serializer.data)

@api_view(['PUT'])
def updateAccount(request,pk):
    getMethod=Account.objects.get(id=pk)
    Account_Serializer=AccountSerializers( instance=getMethod, data=request.data)
    if Account_Serializer.is_valid():
        Account_Serializer.save()
    return Response(Account_Serializer.data)

@api_view(['DELETE'])
def deleteAccount(request,pk):
    deleteMethod=Account.objects.get(id=pk)
    deleteMethod.delete()
    return Response("Item Successfully Deleted")

  
      
