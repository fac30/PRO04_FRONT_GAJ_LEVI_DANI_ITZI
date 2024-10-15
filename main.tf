provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "canvas-collective" {
  bucket = "canvas-collective"
  acl    = "private"
  tags = {
    Name = var.Name
  }
}

