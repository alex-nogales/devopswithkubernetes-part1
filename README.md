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

## Exercise 1.03: Declarative approach
In your "main application" create the folder for manifests and move your deployment into a declarative file.
Make sure everything still works by restarting and following logs.

> Done

## Exercise 1.04: Project v0.2
Create a deployment for your project.
You won't have access to the port yet but that'll come soon.

> Done

# Introduction to Debugging
## Learning Objectives
After this section you
- can start debugging when something doesn't work
- know to use Lens to explore Kubernetes resources

# Introduction to Networking
## Learning Objectives
After this section you
- are able to use Services to access applications from outside of the cluster
- are able to use Ingresses to access applications from outside of the cluster

### Exercise 1.05: Project v0.3
Have the project respond something to a GET request sent to the project. A simple html page is good or you can deploy something more complex like a single-page-application.
Use `kubectl port-forward` to confirm that the project is accessible and works in the cluster by using a browser to access the project.

> Done

## Exercise 1.06: Project v0.4

Use a NodePort Service to enable access to the project.

> Done

## Exercise 1.07: External access with Ingress
"Main application" currently outputs a timestamp and a random string to the logs.
Add an endpoint to request the current status (timestamp and string) and an ingress so that you can access it with a browser.
You can just store the string and timestamp to the memory.

> Done

## Exercise 1.08: Project v0.5
Switch to using Ingress instead of NodePort to access the project. You can delete the ingress of the "main application" so they don't interfere with this exercise. We'll look more into paths and routing in the next exercise and at that point you can configure project to run with the main application side by side.

> project at rndmz/smallapp
> Done

## Exercise 1.09: More services
Develop a second application that simply responds with "pong 0" to a GET request and increases a counter (the 0) so that you can see how many requests have been sent. The counter should be in memory so it may reset at some point. Create a new deployment for it and have it share ingress with "main application" just route requests directed '/pingpong' to it.
In future exercises, this second application will be referred to as "ping/pong application"
This is not required, but you can add the following annotation to your ingress so that the path in ingress is stripped from the request. This'll allow you to use "/pingpong" path whilst the ping-pong application listens on "/":

```
 metadata:
  annotations:
    traefik.ingress.kubernetes.io/rule-type: "PathPrefixStrip"
```
> 'main app' at rndmz/mainapp
> Done

# Introduction to Storage
**Learning Objectives**
After this section you
- are able to use volumes to share data between two containers in a pod
- know about persistent volumes to store data on the disk of a node

## Exercise 1.10: Even more services
Split the main application into two different containers within a single pod:
One generates a new timestamp every 5 seconds and saves it into a file. The other reads that file and outputs it with its hash for the user to see.

```
exercise 1.10
-> mainapp
  -> 01_mainapp: The app one who creates de file
  -> 02_mainapp: The one that publishes the file output
```
> Done

## Exercise 1.11: Persisting data
Let's share data between ping-pong and main application using persistent volumes. Create both a *PersistentVolume* and *PersistentVolumeClaim* and alter the *Deployment* to utilize it. As PersistentVolume is often maintained by cluster administrators rather than developers and are not application specific you should keep the definition for that separated.
Save the number of requests to ping / pong application into a file in the volume and output it with the timestamp and hash when sending a request to our main application. In the end, the two pods should share a persistent volume between the two applications. So the browser should display the following when accessing the main application:

> 2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
> Ping / Pongs: 3

> Not Done


