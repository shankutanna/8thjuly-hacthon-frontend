variable "region" {
  default = "ap-south-1"
}

variable "instance_type" {
  default = "t3.micro"   # FREE TIER SAFE
}

variable "key_name" {
  description = "Existing EC2 key pair name"
}
