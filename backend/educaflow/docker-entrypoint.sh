# Use an official Python runtime as a parent image
FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory to /code
WORKDIR /code

# Copy the current directory contents into the container at /code
COPY . /code

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# tail -f /dev/null

# Run app.py when the container launches
CMD ["python", "manage.py", "makemigrations", "&&", "python", "manage.py", "migrate", "--run-syncdb", "&&", "python", "manage.py", "runserver"]
