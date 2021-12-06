

Please check out the following library: https://pypi.python.org/pypi/pyshp/1.1.7'
```shell

import shapefile
from json import dumps

# read the shapefile
reader = shapefile.Reader("my.shp")
fields = reader.fields[1:]
field_names = [field[0] for field in fields]
buffer = []
for sr in reader.shapeRecords():
atr = dict(zip(field_names, sr.record))
geom = sr.shape.__geo_interface__
buffer.append(dict(type="Feature", \
geometry=geom, properties=atr))

    # write the GeoJSON file

geojson = open("pyshp-demo.json", "w")
geojson.write(dumps({"type": "FeatureCollection", "features": buffer}, indent=2) + "\n")
geojson.close()

#As noted in other answers, you could use geopandas:

import geopandas

shp_file = geopandas.read_file('myshpfile.shp')
shp_file.to_file('myshpfile.geojson', driver='GeoJSON')
```
leaflet add layer dynamically by rendering a component or running a function 
then strategy to convert geojson to tiles on fly
npm install geojson-vt

