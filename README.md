# Part 1

# First Deploy
## Learning Objectives
After this section you:
- are able to create and run a Kubernetes cluster locally with k3d
- can deploy a simple application to Kubernetes


### Exercise 1.01: Getting started
**Exercises can be done with any language and framework you want.**
Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.
``` 
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
2020-03-30T12:15:22.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43
```
Deploy it into your Kubernetes cluster and confirm that it's running with `kubectl logs ...`
In future exercises, this application will be referred to as "Main application". We will revisit some exercise applications during the course.

> Done

### Exercise 1.02: Project v0.1
**Project can be done with any language and framework you want**
The project will be a simple todo application with the familiar features of create, read, update, and delete (CRUD). We'll develop it during all parts of this course.
Todo is a text like "I need to clean the house" that can be in state of not-done or done.

![Project evolution](https://devopswithkubernetes.com/static/42cd00819d1db5789826b38bb7f95328/2430e/project.webp)

Dashed lines separate major differences across the course. Some exercises are not included in the picture. The connections between most pods are not included as well. You're free to do them however you want.
Keep this in mind if you want to avoid doing more work than necessary.
Let's get started!
Create a web server that outputs "Server started in port NNNN" when it's started and deploy it into your Kubernetes cluster. You won't have access to the port yet but that'll come soon.

> Done