from django.db import models
from django.contrib.auth.models import User



class Account(models.Model):
    
    name = models.CharField( max_length=50 )
  
    address=models.CharField(max_length=255 ,blank=True ,null=True )
    CreatedBy=models.CharField(max_length=100 ,blank=True ,null=True)
 
    ModifiedBy=models.CharField(max_length=50 ,blank=True ,null=True)
    Gender=models.CharField(max_length=50 ,blank=True ,null=True)
   
    MobileNo=models.IntegerField()

    

    

# Create your models here.
