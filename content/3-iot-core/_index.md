---
title : "Set up IoT Core"
date: 2026-05-10
weight : 3
chapter : false
pre : " <b> 3. </b> "
---

In this step, we will set up AWS IoT Core to manage our IoT devices.

### Steps
1. Create an IoT Thing
2. Create and attach a policy
3. Generate certificates
4. Attach certificates to the thing

### AWS IoT Core Console
Navigate to the AWS IoT Core console and follow these steps:

1. Go to **Manage > Things** and click **Create things**
2. Choose **Create a single thing**
3. Enter a name for your thing (e.g., WeatherSensor)
4. Click **Next**

For the device certificate, choose **Auto-generate a new certificate**

Create a policy:

1. Go to **Secure > Policies**
2. Click **Create policy**
3. Name: WeatherSensorPolicy
4. Add statements for IoT actions

Attach the policy to the certificate.

### Code Snippet
```bash
# Create IoT Thing
aws iot create-thing --thing-name WeatherSensor

# Create policy
aws iot create-policy --policy-name WeatherSensorPolicy --policy-document file://policy.json
```

Where policy.json contains:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Publish",
        "iot:Subscribe",
        "iot:Connect",
        "iot:Receive"
      ],
      "Resource": "*"
    }
  ]
}
```
