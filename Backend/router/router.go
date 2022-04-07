package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func RunServer() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/status", r.statusHandler)

	fmt.Println("Hello!")
	r.Run(":8080")
}
