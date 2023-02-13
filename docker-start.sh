#!/bin/bash
docker image build -t test:latest . 
docker run -d -p 8080:8080 test:latest