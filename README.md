# Slope Scout : Optimal NY State Ski Resort Route 

Slope Scout provides the optimal route through 9 of NY state's premier ski resorts and areas, providing thrill seekers and easy riders with the shortest and most efficient route for their winter adventure. Leveraging straightforward algorithms, geospatial visualizations, and a webpage for user interaction, you can put your mind at ease and just follow the path to your next powder adventure.

## Webpage

[Slope Scout](https://jmik-thang.github.io/winter-vacation-spots/)

## Functionality

This project combines data science and software engineering to create a website
with an optimal route between 9 ski resorts in New York.

## Technologies

- HTML and CSS
- JavaScript
- Open Source Routing Machine
- NetworkX
- Deployed on GitHub Pages

## Setup Instructions

Follow these steps if you need to run the project locally:

**Clone this Repository**

``` bash
git clone https://github.com/JMIK-THANG/winter-vacation-spots.git
cd winter-vacation-spots
```
Installation instructions to run .ipynb files locally:

**With Conda:**

1. Create the environment from the `environment.yml` file:
``` bash
conda env create -f environment.yml
```

2. Activate the new environment:
``` bash
conda activate NY_SKI_DATA
```
3. Verify that the new environment was installed correctly:
``` bash
conda env list
```

**With pip:**

``` bash
pip install -r requirements.txt
```
## Data Project

1. Data Collection

Ski resorts and areas were selected based on a geolocation query of the resort names and their location within New York state. These ski resort and area names were collected from the web scrape procedure performed on [SkiCentral](https://www.skicentral.com/). Mountain statistics, where available, were collected from an additional scrape procedure of the appropriate child links.

- From the collected route names and statistics, the top 9 locations were decided based on their initial positions from the webscrape, while being sure that the final locations are in different cities.
- Mountain statistics included:
  - **vertical_rise**: a measurement of the total elevation change a skier descends from the highest point to the lowest point on a ski run.
  - **base_elevation**: a measurment of the altitude at the bottom of the ski resort or ski area, essentially the lowest point of on the mountain accessable to skiers.
  - **summit_elevation**: a measurement of the height above sea level of the highest point on a mountain.
  - **annual_snowfall**: the total amount of snow that falls over the course of a year.
  - **number_of_trails**: the total number of trails on the mountain
  - **skiable_acres**: the amount of terrain that is accessible by ski.
  - **longest_run**: a measurement refering to a continuous downhill ski slope that covers the greatest distance from top to bottom on a mountain.
  - **snowmaking**: a measurement or indication that the ski resort or area creates artifical snow for the purpose producing snow when natural snowfall is limited.

2. Data Analysis

- Analysis based on various elevation and snow metrics, derived from the mountain statistics web scrape procedure, was processed for the purpose of determining relationships or correlations between these elevation metrics and annual snowfall.
- Additional analysis was performed regarding the recorded number of trails on the mountain and skiiable acres.
  
3. Route Tracking & Optimization

- Utilized OpenStreetMap geolocated coordinates to determine route geometries and distances between any given ski resort in the dataset created by leveraging the [Open Source Routing Machine](https://project-osrm.org/).
- Selected **Beartown Ski Area** as the first point for the routes in order to maintain a uniform test between random and optimized routing techniques. Selected due to its low `vertical_rise` compared to the rest of the 9 selected resorts and areas, making for easy skiing.

# Selected 9 NY State Ski Resorts

| #   | Name      | Vertical Rise (ft) | Annual Snowfall (in) | Latitude | Longitude |
| --- | ------------------ | --------------- | ---------------- | --------- | -------- |
| 0   | Whiteface Mountain | 3430  | 190       | 44.36    | -73.90    |
| 1   | Gore Mountain      | 2537  | 150       | 43.67  | -74.04    |
| 2   | Hunter Mountain    | 1600  | 125       | 42.17   | -74.23    |
| 3   | Belleayre Mountain | 1404  | 141       | 42.12   | -74.47   |
| 4   | Holiday Valley     | 750  | 180      | 42.26   | -78.66    |
| 5   | Windham Mountain   | 1600  | 105      | 42.29    | -74.26    |
| 6   | Greek Peak         | 952  | 122       | 42.50   | -76.14    |
| 7   | Peek'n Peak Resort | 400  | 200       | 42.06   | -79.74    |
| 8   | Beartown Ski Area  | 150  | NaN       | 44.76   | -73.58    |

# Data Analysis



# Random Route
![Random Route](https://github.com/JMIK-THANG/winter-vacation-spots/blob/main/notebooks/random_route.png)

**Total Distance: 1718.56 miles**

| |from| 	to| 	distance (mi)|
|-|-----------|--------|--------|
|0| 	Beartown Ski Area |	Greek Peak |	268.71| 
|1 |	Greek Peak |	Windham Mountain |123.64|
|2 |	Windham Mountain |	Whiteface Mountain |	203.55|
|3 |	Whiteface Mountain |	Hunter Mountain 	|201.25|
|4 |	Hunter Mountain |	Holiday Valley |	300.61|
|5 |	Holiday Valley |	Peek'n Peak Resort |	70.36|
|6 |	Peek'n Peak Resort |	Gore Mountain 	| 379.17|
|7 |	Gore Mountain 	|Belleayre Mountain |	171.27|


# Optimized Route
![Optimized Route](https://github.com/JMIK-THANG/winter-vacation-spots/blob/main/notebooks/optimized_route.png)

**Total Distance: 688.45 miles**

| |	from |	to |	distance (mi)|
|-|-|-|-|
|0| 	Beartown Ski Area| 	Greek Peak 	|268.71|
|1| 	Greek Peak| 	Windham Mountain 	|123.64|
|2| 	Windham Mountain| 	Whiteface Mountain 	|203.55|
|3| 	Whiteface Mountain| 	Hunter Mountain 	|201.25|
|4| 	Hunter Mountain| 	Holiday Valley 	|300.61|
|5| 	Holiday Valley| 	Peek'n Peak Resort 	|70.36|
|6| 	Peek'n Peak Resort| 	Gore Mountain 	|379.17|
|7| 	Gore Mountain| 	Belleayre Mountain 	|171.27|

---
The algorithm builds a route with a start at the lowest `vertical_rise`, this allows uniformity between the random and optimized comparisons. Utilizing the graph information from the DiGraph created earlier, we can determine the appropriate route which minimizes the distance traveled.

While making sure that the next node is within the unvisited set, the next node is decided based on a comparison of all the available distances from the current node. This is determined through a dictionary search of unvisited nodes and their respective distances or weights, and selecting the edge and connected node with the minimum value.

Once the minmum distance between two nodes in the univsited set is determined the route list is appended, this continues for as long as there is a an unvisited node. Once all the nodes have been visited and the minimal distance total is calculated. We insure that the loop is left open/ceased.

We explored utilizing Dijkstra's algorithm to help salve the directed graph, however it became apparent that it did not align with the mission statement provided. Additionally, that algorithm requires an overall end point, and that is not required by this project. That is why we decided to proceed in obtaining the optimal route in this fashion.

To reiterate the strategy of utilizing the graph network. It is designed to capture all distance information determined from the OSRM measurements between all points. Making sure to define the starting point (lowest vertical rise) we determine the next point by getting the minimal distance option, and so on. Once a point is selected as the next_node it is selected as the current node and the procedure is repeated until there are no more nodes to travel to; given that we can only visit each node once.

---

> Visualized directed graph with ski resort nodes and weighted edge distances.
![DiGraph](https://github.com/JMIK-THANG/winter-vacation-spots/blob/main/notebooks/SKI_Resort_DAG.png)

---
# Route Conclusions:

The optimized route significantly improves upon the distance minimization efficiency displayed by the random model. Between the random and optimized model there is a difference of **1030.11 miles** proving the significant enhancement to the routing. Overall an **85.6%** increase in route optimization has been achieved.
