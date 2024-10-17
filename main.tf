provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "canvas-collective" {
  bucket = "canvas-collective"
  acl    = "private"

  website {
    index_document = "index.html"
  }

  tags = {
    Name = var.Name
  }
}

resource "aws_s3_bucket_object" "index-html" {
  bucket = aws_s3_bucket.canvas-collective.bucket
  key    = "index.html"
  source = "index.html"
}

resource "aws_s3_bucket_policy" "canvas-collective" {
  bucket = aws_s3_bucket.canvas-collective.bucket

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = [
          "s3:GetObject"
        ]
        Resource  = [
          "arn:aws:s3:::canvas-collective/*"
        ]
      }
    ]
  })
}



