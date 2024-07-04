from transformers import pipeline

def predict_toxicity(texts):
    print(texts.texts)
    pipe = pipeline("text-classification", model="rsepulvedat/Toxicity_model")
    return pipe(texts.texts)

def predict_constructiveness(texts):
    pipe = pipeline("text-classification", model="rsepulvedat/Constructive_model")
    return pipe(texts.texts)
