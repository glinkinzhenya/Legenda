import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contex';
import './Filter.css';
import { Checkbox, FormControlLabel, Radio, RadioGroup, Slider } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Filter = ({ onFilter, category }) => {
  // все товары
  const [arrayProduct, setArrayProduct] = useState([]);
  // получение товаров
  const { mainData } = useContext(Context);

  useEffect(() => {
    if (mainData) {
      let filteredProducts = mainData[0].product.filter(
        (item) => item.category === category,
      );
      setArrayProduct(filteredProducts);
    }
  }, [mainData]);


  // бренды
  const brands = [
    { value: "Afnan", label: "Afnan" },
    { value: "Ajmal", label: "Ajmal" },
    { value: "Ariana Grande", label: "Ariana Grande" },
    { value: "Balenciaga", label: "Balenciaga" },
    { value: "Byredo", label: "Byredo" },
    { value: "Calvin Klein", label: "Calvin Klein" },
    { value: "Comme des", label: "Comme des" },
    { value: "Creed", label: "Creed" },
  ];

  // милилитры
  const milliliters = [
    { value: "3 ml", label: "3 ml" },
    { value: "50 ml", label: "50 ml" },
    { value: "150 ml", label: "150 ml" },
    { value: "200 ml", label: "200 ml" },
  ];

  // пол
  const sex = [
    { value: "Чоловічий", label: "Чол" },
    { value: "Жіночий", label: "Жін" },
    { value: "Унісекс", label: "Унісекс" }
  ];


  // бренды двигатель false
  const initialCheckedStateBrands = brands.map(() => false);
  const [isCheckedBrands, setIsCheckedBrands] = useState(initialCheckedStateBrands);

  const handleCheckboxChangeBrands = (index) => (event) => {
    const newCheckedStateBrands = [...isCheckedBrands];
    newCheckedStateBrands[index] = event.target.checked;
    setIsCheckedBrands(newCheckedStateBrands);
  };


  // милилитры двигатель false
  const initialCheckedStateMilliliters = milliliters.map(() => false);
  const [isCheckedMilliliters, setIsCheckedMilliliters] = useState(initialCheckedStateMilliliters);

  const handleCheckboxChangeMilliliters = (index) => (event) => {
    const newCheckedStateMilliliters = [...isCheckedMilliliters];
    newCheckedStateMilliliters[index] = event.target.checked;
    setIsCheckedMilliliters(newCheckedStateMilliliters);
  };


  // пол двигатель
  const [selectedValueSex, setSelectedValueSex] = useState("");

  const handleChangeSex = (event) => {
    setSelectedValueSex(event.target.value);
  };


  // цена двигатель

  const [priceRange, setPriceRange] = useState([0, 10000]); // Изначальный диапазон цены

  const handleChangePrice = (event, newValue) => {
    setPriceRange(newValue);
  };

  // мотор фильтра
  const handleFilter = () => {
    // Фильтрация по цене
    const filteredItemsByPrice = arrayProduct.filter((item) => {
      const price = item.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Фильтрация по брендам, только если есть выбранные бренды
    let filteredItemsByBrand = filteredItemsByPrice;
    if (isCheckedBrands.some((isChecked) => isChecked)) {
      filteredItemsByBrand = filteredItemsByPrice.filter((item) => {
        const brand = item.brand;
        const brandIndex = brands.findIndex((option) => option.value === brand);
        return isCheckedBrands[brandIndex];
      });
    }

    let filteredItems;

    // Проверка, выбран ли фильтр по полу
    if (selectedValueSex) {
      // Фильтруем по полу на основе выбранного значения
      filteredItems = filteredItemsByBrand.filter((option) => option.gender === selectedValueSex);
    } else {
      // Если фильтр по полу не выбран, и нет выбранных брендов, фильтруем по остаткам из цены
      if (!isCheckedBrands.some((isChecked) => isChecked)) {
        filteredItems = filteredItemsByPrice;
      } else {
        // Если фильтр по полу не выбран, и есть выбранные бренды, используем только фильтр по брендам
        filteredItems = filteredItemsByBrand;
      }
    }

    console.log(filteredItems);

    onFilter(filteredItems);
  };








  // сброс фильтров
  const handleReset = () => {
    onFilter(arrayProduct);
    const resetState = isCheckedBrands.map(() => false);
    setIsCheckedBrands(resetState);
    setSelectedValueSex('');
    setPriceRange([0, 10000]);

  };

  // фильтр на мобильном телефоне
  const [filterMobile, setfilterMobile] = useState(true);
  console.log(filterMobile);

  useEffect(() => {
    if (window.innerWidth <= 576) {
      setfilterMobile(false)
    } else {
      setfilterMobile(true)
    }
  }, []);

  const handleClickFilterMobile = () => {
    setfilterMobile(!filterMobile)
    document.body.classList.toggle('body-fixed');
  };

  const handleButtonClick = () => {
    handleClickFilterMobile();
    handleFilter();
  };


  return (
    <>
      {!filterMobile &&
        <div onClick={handleClickFilterMobile} className='filter-mobile'>
          <img className='filter-mobile-logo__img' src="/img/filters.svg" alt="" />
          <div className='filter-title'>ФІЛЬТР</div>
        </div>}

      {filterMobile && <div className='filter'>
        <div className='filter-container'>
          <div className='filter-main'>
            <img className='filter-logo__img' src="/img/filters.svg" alt="" />
            <div className='filter-title'>ФІЛЬТР</div>
            <img onClick={handleClickFilterMobile} className='filter-mobile-logo__close' src="./img/close-window.svg" alt="" />
          </div>

          <div className='filter-brand'>

            <div className='filter-brand__title'>Бренд</div>

            <div className='filter-brand__checkbox'>
              {brands.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.value}
                  control={
                    <Checkbox
                      checked={isCheckedBrands[index]}
                      onChange={handleCheckboxChangeBrands(index)}
                      sx={{ color: 'black !important' }}
                      size="small"
                    />
                  }
                  label={option.label}
                  labelPlacement="end"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: '12px !important',
                      fontWeight: '400 !important',
                      fontFamily: 'Nunito',
                    },
                    color: 'rgba(17, 18, 18, 0.70)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className='filter-line'></div>

          <div className='filter-size'>Об'єм</div>
          <div className='filter-size__box'>
            {milliliters.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={
                  <Checkbox
                    checked={isCheckedMilliliters[index]}
                    onChange={handleCheckboxChangeMilliliters(index)}
                    sx={{ color: 'black !important' }}
                    size="small"
                  />
                }
                label={option.label}
                labelPlacement="end"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: '12px !important',
                    fontWeight: '400 !important',
                    fontFamily: 'Nunito',
                  },
                  color: 'rgba(17, 18, 18, 0.70)',
                }}
              />
            ))}
          </div>

          <div className='filter-line'></div>

          <div className='filter-size'>Пол</div>

          <div className='filter-sex'>

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleChangeSex}
              value={selectedValueSex}
            >
              {sex.map((option) => (
                <FormControlLabel
                  key={option.value}
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "13px !important",
                      fontWeight: "400 !important",
                      fontFamily: "Nunito"
                    },
                    color: "rgba(17, 18, 18, 0.70)"
                  }}
                  value={option.value}
                  control={<Radio sx={{ color: "black !important" }} size="small" />}
                  label={option.label}
                />
              ))}
            </RadioGroup>

          </div>

          <div className='filter-line'></div>

          <div className='filter-price'>Ціна</div>

          <Slider
            value={priceRange}
            sx={{ color: "black !important" }}
            size="small"
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            min={0} // Минимальное значение цены
            max={10000} // Максимальное значение цены
            aria-labelledby="price-range-slider"
          />


        </div>
        <div className='filter-button'>
          <button className='filter-button__click' onClick={handleReset}>Скасувати</button>
          <button className='filter-button__click' onClick={filterMobile ? handleFilter : handleButtonClick}>Застосувати</button>
        </div>
      </div>}
    </>
  );
};

export default Filter;
