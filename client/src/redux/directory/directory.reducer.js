const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/yF3kVxh/hats.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/C01hC1t/jackets.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'shoes',
      imageUrl: 'https://i.ibb.co/7YGjffz/shoes.jpg',
      id: 3,
      linkUrl: 'shop/shoes',
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/FH0Prcs/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/fxR8D8N/mens.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
