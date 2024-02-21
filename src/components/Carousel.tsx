import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import carouselfirst from "/public/carouselfirst.png"
import carouselsec from "/public/carouselsec.png"
import { carouselImages } from "@/data/data"

export function HistoryCarousel({ imageUrl }: any) {

  return (
    <section className="absolute bottom-1/4 sm:bottom-1/3 lg:bottom-0 z-1 w-full mx-auto h-60 lg:bg-blue-800/30">
      <section className="flex justify-center align-middle items-center py-0 sm:py-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-[15rem] sm:max-w-sm md:max-w-md lg:max-w-2xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card className="w-56">
                    <CardContent className="flex justify-center w-full h-full">
                      <Image className="object-contain" src={carouselImages[index % carouselImages.length].imageUrl} alt='algo' />
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
