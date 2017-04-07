var express = require('express');
var router = express.Router();

const cars = [
  {
    id: 1, 
    brandName: "Mercedes", 
    model: "B200",
    description: `The Mercedes-Benz B-Class is a compact luxury car produced by German automaker Mercedes-Benz since 2005. Mercedes-Benz markets it as a sports compact tourer. It is similar to the A-Class, though bigger and with bigger engines. The European New Car Assessment Programme (Euro NCAP) classifies it as a small MPV (multi-purpose vehicle).[1] As of December 20, 2013, delivery of B-Class vehicles reached 1 million since the launch of the B-Class in 2005.`,
    image: "https://en.wikipedia.org/wiki/Mercedes-Benz_B-Class#/media/File:Mercedes-Benz_B-Class_2014.jpg",
    engineCap: 2000,
    likes: 100,
    liked: false
  },
  {
    id: 2, 
    brandName: "Mercedes", 
    model: "C180",
    description: `The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the A-Class arrived in 1997. The C-Class is built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries. The first C-Class (W202) sedan was produced on 1 June 1993, and the first of the second generation (W203) rolled off the assembly line on 18 July 2000. The C-Class has been available with a 4Matic (i.e. four-wheel drive) option since 2002. The third generation (W204) was launched in 2007. The latest generation C-Class (W205) came out in 2014. Though originally available as a sedan and a station wagon, the W203 series in 2000 debuted a fastback coupé (SportCoupé) version that, when facelifted, became the Mercedes- Benz CLC- Class.The CLC- Class remained in production until 2011 when it was replaced by a new W204 C- Class coupé for the 2012 model year.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mercedes_Benz_C_180_CGi_2013_%2811410856014%29.jpg/1920px-Mercedes_Benz_C_180_CGi_2013_%2811410856014%29.jpg",
    engineCap: 1800,
    likes: 122,
    liked: true
  },
  {
    id: 3, 
    brandName: "Mercedes", 
    model: "E220",
    description: `The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations produced since 1993, marketed worldwide across five generations. Prior to 1993, Mercedes-Benz offered the same category of car under a non-unified naming structure. The E initially stood for Einspritzmotor (German for fuel injection engine); a new feature in volume production vehicles at the time that the E-Class first appeared, with the E as a suffix to the engine nomenclature (e.g. 230 E) in the 1960s. It was not until the launch of the facelifted W124 in 1993 that the E was used as a prefix (i.e., E 220) and the model referred to officially as the E-Class (or E-Klasse). At this time all Mercedes cars used fuel injection and the company felt it was no longer necessary to add this as a distinguishing feature. All generations of the E-Class have offered either rear-wheel drive or Mercedes' 4Matic four-wheel drive system. Historically, the E-Class is Mercedes-Benz' best-selling model, with more than 13 million sold by 2015. Though originally available as four-door sedan and five-door station wagon, the W212 series in 2009 debuted a two-door coupé and two-door convertible. Before that, the Mercedes-Benz CLK-Class (1997 to 2009) design and styling was derived from the E-Class although technically it was based on the mechanical underpinnings of the smaller C-Class. Due to the E-Class's size and durability, it has filled many market segments, from personal cars to frequently serving as taxis in European and Asian countries, as well special-purpose vehicles (e.g. police or ambulance modifications) from the factory.`,
    image:         "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mercedes-Benz_E_200_Avantgarde_%28W_212%2C_Facelift%29_%E2%80%93_Frontansicht%2C_24._Oktober_2015%2C_M%C3%BCnster.jpg/1920px-Mercedes-Benz_E_200_Avantgarde_%28W_212%2C_Facelift%29_%E2%80%93_Frontansicht%2C_24._Oktober_2015%2C_M%C3%BCnster.jpg",
    engineCap: 2200,
    likes: 24,
    liked: false
  },
  {
    id: 4, 
    brandName: "BMW", 
    model: "520d",
    description: `The BMW 5 Series is a mid-size luxury car manufactured by German automaker BMW since 1972. It is the successor to the 4-door sedan models of the BMW New Class and is currently in its seventh generation.
        Initially, the 5 Series was only available in a sedan body style. The touring body style was added in 1991 and the 5-door hatchback ("Gran Touring") was added in 2009.
        It is BMW's second best-selling model after the 3-Series and in 2010 produced about 50% of the BMW's profits.
        On January 29, 2008, the 5 millionth 5 Series was manufactured, a 530d Saloon in Carbon Black Metallic.
        The 5 Series got its name by being the fifth of the "new series" cars after the V-8 and Isetta era[citation needed] and was the replacement for the older four-door New Class sedans. The current BMW naming convention began with the first 5 Series.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/BMW5er_6.jpg/1920px-BMW5er_6.jpg",
    engineCap: 1995,
    likes: 30,
    liked: true
  },
  {
    id: 5, 
    brandName: "Volkswagen ", 
    model: "Golf",
    description: `The Volkswagen Golf is a small family car produced by the German manufacturer Volkswagen since 1974, marketed worldwide across seven generations, in various body configurations and under various nameplates – such as the Volkswagen Rabbit in the United States and Canada (Mk1 and Mk5), and as the Volkswagen Caribe in Mexico (Mk1).
The original Golf Mk1 was a front-wheel drive, front-engined replacement for the air-cooled, rear-engined, rear-wheel drive Volkswagen Beetle. Historically, the Golf is Volkswagen's best-selling model and the world's second best-selling model, with more than 29 million built by 2012.
Initially, most Golf production was in the 3-door hatchback style. Other variants include a 5-door hatchback, station wagon (Variant, from 1993), convertible (Cabriolet and Cabrio, 1979–2002, Cabriolet, 2011–present), and a Golf-derived notchback sedan, variously called Volkswagen Jetta, Volkswagen Vento (from 1992) or Volkswagen Bora (from 1999). The cars have filled many market segments, from basic a personal car, to high-performance hot hatches.
The Volkswagen Golf has won many awards throughout its history. The Volkswagen Golf won the World Car of the Year in 2009, with the Volkswagen Golf Mk6 and in 2013 with the Volkswagen Golf Mk7. The Golf is one of only three cars, the others being the Renault Clio and Opel/Vauxhall Astra, to have been voted European Car of the Year twice, in 1992 and 2013. The Volkswagen Golf has made the Car and Driver annual 10 Best list multiple times. The Golf Mk 7 won the Motor Trend Car of the Year award in 2015, and the Mk1 GTI also won the award in 1985 (due to it being built in Pennsylvania.)`,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2015_Volkswagen_Golf_%285G%29_103TSI_R-Line_5-door_hatchback_%282016-04-07%29_01.jpg/1920px-2015_Volkswagen_Golf_%285G%29_103TSI_R-Line_5-door_hatchback_%282016-04-07%29_01.jpg",
    engineCap: 1900,
    likes: 20,
    liked: true
  }
];

router.get('/', function(req, res, next) {
  res.json(cars);
});

router.get('/search', function(req, res, next) {
  let term = req.query['term'];
  let foundCars = [];
  if(term) {
    foundCars = cars.filter(item => {
      return item.brandName.toLowerCase().indexOf(term.toLowerCase()) > -1
        || item.model.toLowerCase().indexOf(term.toLowerCase()) > -1
        || item.description.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }


  res.json(foundCars);
})

router.get('/:id', function(req, res, next) {
  const id = +req.params['id'];
  const foundCar = cars.filter(car => car.id === id)[0];
  res.status(foundCar ? 200 : 404).json(foundCar);
});


module.exports = router;
