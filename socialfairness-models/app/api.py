from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from . import schemas
from . import classifiers

# APP
app = FastAPI()
#app = FastAPI(openapi_url=None) # Disable interactive docs

# Allow all CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- HTTP METHODS ----------
@app.post("/models/confiabilidad", response_model=schemas.OutputPredictions, tags=["Prediction"])
async def predict_reliability(
    texts: schemas.InputTexts
):
    """Predicts reliability based on a given input text.
    
    Args:
        text: String containing news.
        
    Returns:
        The reliability of the text."""
    
    # TODO: Aquí invocamos al modelo de confiabilidad y devolvemos la predicción.
    return {"prediction": 0.0}

@app.post("/models/toxicidad", response_model=schemas.OutputPredictions, tags=["Prediction"])
async def predict_toxicity(
    texts: schemas.InputTexts
):
    """Predicts toxcity based on a given input text.
    
    Args:
        text: String containing news.
        
    Returns:
        The toxicity of the text."""

    pred = classifiers.predict_toxicity(texts)
    return {"predictions": pred}

@app.post("/models/constructividad", response_model=schemas.OutputPredictions, tags=["Prediction"])
async def predict_constructiveness(
    texts: schemas.InputTexts
):
    """Predicts constructiveness based on a given input text.
    
    Args:
        text: String containing news.
        
    Returns:
        The constructiveness of the text."""

    pred = classifiers.predict_constructiveness(texts)
    return {"predictions": pred}
