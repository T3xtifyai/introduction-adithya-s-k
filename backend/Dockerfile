FROM python:3.11

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 8000

ENV FASTAPI_APP=main.py

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]