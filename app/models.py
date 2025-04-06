from django.db import models

# Create your models here.
class Song(models.Model):
  title = models.TextField()
  artist= models.TextField()
  image = models.ImageField(upload_to= "images")
  audio_file = models.FileField(upload_to= "audios")
  audio_link = models.CharField(max_length= 300, blank=True, null=True)
  lyrics = models.TextField()
  duration = models.CharField(max_length=50, blank=True, null=True)
  pagination = 2
  
  def __str__(self):
    return self.title