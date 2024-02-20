import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HistoryCarousel() {
  return (
    <section className="absolute bottom-1/4 sm:bottom-1/3 lg:bottom-0 z-1 w-full mx-auto h-60 lg:bg-blue-800/30">
      <section className="flex justify-center align-middle items-center py-0 sm:py-7">
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-[15rem] sm:max-w-sm md:max-w-md lg:max-w-2xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="">
                    <CardContent className="flex aspect-square items-center justify-center p-10">
                      <span className="text-3xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

    </section>
  )
}
