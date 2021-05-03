var SetImages = function SetImages() {
    var set = ['image1', 'image2', 'image3', 'image4'];
    src = "./images/";
    return React.createElement(
        'ul',
        { id: 'setImages', className: 'body__setImages  setImages' },
        set.map(function (set) {
            return React.createElement(
                'li',
                { className: 'setImages__items' },
                React.createElement('img', { src: src + set + ".jpg", alt: set })
            );
        })
    );
};