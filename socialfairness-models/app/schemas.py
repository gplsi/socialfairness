from pydantic import BaseModel, HttpUrl


# ---------- DATA SCHEMAS ----------
class InputTexts(BaseModel):
    """Schema to define the input structure of the data to predict."""
    texts: list[str]

class OutputPredictions(BaseModel):
    """Schema to define the output predictions' structure."""
    predictions: list[dict]

class InputURL(BaseModel):
    url: HttpUrl
