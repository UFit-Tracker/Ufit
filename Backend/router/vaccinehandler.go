package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func statusHandler(c *gin.Context) {
	fmt.Println("Hello")
}
