import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import snap1 from "../images/snap1.PNG";
import snap2 from "../images/snap2.PNG";
import snap3 from "../images/snap3.PNG";
import snap4 from "../images/snap4.PNG";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NorthIcon from '@mui/icons-material/North';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import SouthIcon from '@mui/icons-material/South';
import { Button } from '@mui/material';



const ContentPage = () => {

  const cardData = [
    { id: 1, name: 'Earning', stock: '$198K',color:'green', icon: <NorthIcon color='green'/>, progras: '+37.8% this month', imageUrl: snap1 },
    { id: 2, name: 'Orders', stock: '$2.4K',color:'red', icon: <SouthIcon />, progras: '+2% this month', imageUrl: snap2 },
    { id: 3, name: 'Balance', stock: '$2.4K',color:'red', icon: <SouthIcon />, progras: '+2% this month', imageUrl: snap3 },
    { id: 4, name: 'Total Sales', stock: '$89K',color:'green', icon: <NorthIcon />, progras: '+11% this month', imageUrl: snap4 },
  ];

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const barChartData = [
    { month: 'January', value: 70 },
    { month: 'February', value: 50 },
    { month: 'March', value: 60 },
    { month: 'April', value: 80 },
    { month: 'May', value: 70 },
    { month: 'June', value: 90 },
    { month: 'July', value: 75 },
    { month: 'August', value: 100, },
    { month: 'September', value: 45 },
    { month: 'October', value: 80 },
    { month: 'November', value: 20 },
    { month: 'December', value: 50 },
  ];

  const progressValue = 70;

  return (

    <Container maxWidth="xl" style={{ backgroundColor: '#f0f0f0', display: 'block' }}>
      <Grid container spacing={2} alignItems="center" marginTop="2px">
        <Grid item xl={10} md={6} sm={6} xs={6}>
          <Typography variant="h5" sx={{ alignItems: 'center', color: "black" }}>
            Hello Shahrukh&nbsp;
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </Typography>
        </Grid>
        <Grid item xl={2} md={6} sm={6} xs={6}>
          <TextField
            sx={{ backgroundColor: "white" }}
            label="Search"
            variant="outlined"
            size='small'
            InputProps={{
              startAdornment: (
                <SearchIcon />
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6} marginTop="0px">
        {cardData.map((card) => (
          <Grid key={card.id} item xl={3} md={4} sm={6} xs={12}>
            <Card >
              <CardContent>
                <Grid container alignItems="center" spacing={1}>
                  {/* Image */}
                  <Grid item>
                    <img src={card.imageUrl} alt={`Image ${card.id}`} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
                  </Grid>
                  {/* Name */}
                  <Grid item>
                    <Typography variant="overline">{card.name}</Typography>
                    <Typography variant="h5" spacing={2 }>{card.stock}</Typography>
                    <Grid sx={{ display: "flex"}}><Typography variant ="body2" color={card.color}>{card.icon}</Typography><Typography variant='body1'>{card.progras}</Typography></Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={4} marginTop={2}>
        <Grid item xl={8} md={8} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Grid display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6" gutterBottom>
                  Monthly Sales Chart
                </Typography>
                <Button variant="overline" gutterBottom>
                  Quarterly <KeyboardArrowDownIcon />
                </Button>
              </Grid>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData} margin={{ top: 20, right: 20, left: 30, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="value"
                    fill='#8884d8'
                    color={(entry) => (entry.value > 50 ? 'green' : 'white')}
                  />
                </BarChart>
              </ResponsiveContainer>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent style={{ textAlign: 'center' }}>
              <Grid style={{ textAlign: 'start' }}>
                <Typography variant="h5" gutterBottom >
                  Customer Progress
                </Typography>
                <Typography variant="overline" gutterBottom>
                  Customers that buy products
                </Typography>
              </Grid>
              <CircularProgress
                variant="determinate"
                value={progressValue}
                size={240}
                thickness={5}
                sx={{ color: (theme) => (progressValue < 50 ? theme.palette.error.main : theme.palette.info.main) }}
              />
              <Typography variant="body2" color="GrayText">
                {`Progress: ${progressValue}%`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={12} md={12} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>

                <Grid item xl={9} xs={6} sm={6} md={6}>
                  <Typography variant="button" display="block" sx={{ color: "blacks" }}>
                    Product Sell
                  </Typography>
                </Grid>
                <Grid item xl={3} xs={6} sm={6} md={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={6}>
                      <TextField label="Search" size='small' InputProps={{
                        startAdornment: (
                          <SearchIcon />
                        ),
                      }} />
                    </Grid>
                    <FormControl sx={{ marginTop: 2, marginLeft: 2, minWidth: 150 }} size="small">
                      <InputLabel id="demo-select-small-label">Last 30 days</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Search"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "0px" }}>
                <Grid item xl={9} xs={6} sm={12} md={6}>
                  <Typography variant="caption" sx={{ color: "textSecondary" }}>
                    Product Name
                  </Typography>
                </Grid>
                <Grid item xl={3} xs={6} sm={12} md={6}>
                  <Grid container spacing={2} sx={{ justifyContent: "space-around", marginTop: "1px" }}>
                    <Typography variant="caption" color="textSecondary">
                      Stock
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Price
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Total Sales
                    </Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "0px" }}>
                <Grid item xl={9} xs={6} sm={6} md={6}>
                  <Grid container spacing={2} alignItems="center">
                    <Box sx={{ width: 100, height: 55, overflow: 'hidden', marginLeft: '15px' }}>
                      <img src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg" alt="User Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Grid item>
                      <Typography variant="h6">Abstract 3D</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={3} xs={6} sm={6} md={6}>
                  <Grid container spacing={2} sx={{ justifyContent: "space-around", marginTop: "1px" }}>
                    <Typography variant="p" color="black">
                      32 in Stock
                    </Typography>
                    <Typography variant="h6" color="black">
                      $ 45.9
                    </Typography>
                    <Typography variant="p" color="black">
                      20
                    </Typography>

                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "0px" }}>
                <Grid item xl={9} xs={6} sm={6} md={6}>
                  <Grid container spacing={2} alignItems="center">
                    <Box sx={{ width: 100, height: 55, overflow: 'hidden', marginLeft: '15px' }}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBx9Wr0-Vrvo7-X_EwAXnCxBrBODj3sjPLE_6DZPA&s" alt="User Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Grid item>
                      <Typography variant="h6">Abstract 3D</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={3} xs={6} sm={6} md={6}>
                  <Grid container spacing={2} sx={{ justifyContent: "space-around", marginTop: "1px" }}>
                    <Typography variant="p" color="black">
                      32 in Stock
                    </Typography>
                    <Typography variant="h6" color="black">
                      $ 45.9
                    </Typography>
                    <Typography variant="p" color="black">
                      20
                    </Typography>

                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid >

    </Container>

  );
};
export default ContentPage;
