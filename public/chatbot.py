#import necessary libraries
import io
import random
import string # to process standard python strings
import warnings
#import numpy as np
#from sklearn.feature_extraction.text import TfidfVectorizer
#from sklearn.metrics.pairwise import cosine_similarity
import warnings
warnings.filterwarnings('ignore')

#import nltk
#from nltk.stem import WordNetLemmatizer

# Keyword Matching
GREETING_INPUTS = ("hello")
GREETING_RESPONSES = ["hi"]

def greeting(sentence):
    """If user's input is a greeting, return a greeting response"""
    for word in sentence.split():
        if word.lower() in GREETING_INPUTS:
            return random.choice(GREETING_RESPONSES)


##commit 2

#switch function
def switch(user_response):
    print("user response: ", user_response)
    switcher = {
        "1": "addiction link",
        "2": "prevention link",
        "3": "treatment link",
        "4": "recovery link",
    }
    print(switcher[user_response])
   

#print switch.get(user_response, "Invalid option")


flag=True
repeat = "yes"
print("Are you in need of immediate help?")
while(flag==True):
    user_response = input()
    user_response=user_response.lower()
    #to exit
    if(user_response!='no'):
        if(user_response=='thanks' or user_response=='thank you' ):
            flag=False
            print("Bye")
        
        else:
            if(greeting(user_response)!=None):
                print("Are you in need of immediate help?"+greeting(user_response))
            else:
                if(user_response=='yes' or user_response=='ya' ):
                    print("Are you inquiring about yourself?")
                    user_response = input()
                    if(user_response=='yes' or user_response=='ya'):
                        while(repeat=="yes"):
                            print("Choose options 1,2,3,4:\n1.Addicion\n2.Prevention\n3.Treatment\n4.Recovery")
                            user_response = input()
                            switch(user_response)
                            print("Do you want to continue:")
                            repeat = input()
                            print("Would you like attend an event?")
                            repeat = "no"
                            extra_q = input()
                            while (extra_q == 'yes'):
                                print("attend an event link")
                                print("Would you like to view testimonials?")
                                extra_q = input()
                                if extra_q == 'yes':
                                    print("testimonial link")
                                    print("Would you like to become an ambassador?")
                                    extra_q = input()
                                    if extra_q == 'yes':
                                        print("ambassador signup link")
                                        print("Would you like to restart this menu?")
                                        extra_q = input()
                            flag=False


    else:
        flag=False
        print("Bye! take care..")    
        


