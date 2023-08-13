from django.contrib.auth.models import User
from .models import Profile
from django.db.models.signals import post_save, pre_delete # type of signal
from django.dispatch import receiver

# User is created -> signal -> Profile
# profile(signal) -> profile is created for new User


@receiver(post_save, sender=Profile)
def notify_new_profile (sender, instance, created, **kwargs):
    print(instance.name, instance.email)


@receiver(pre_delete, sender=Profile)
def warn_before_deleting (sender, instance, created, **kwargs):
   
    if instance.is_active():
        print(f"Warning! {instance.name} is still active!")