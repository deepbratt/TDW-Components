'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CustomButton = function (_a) {
    var buttonText = _a.buttonText;
    return React__default['default'].createElement(core.Button, null, buttonText);
};

var Colors = {
    textPrimary: "#092C4C",
    flashWhite: "#EFF3FA",
};

var flashWhite = Colors.flashWhite, textPrimary = Colors.textPrimary;
var FooterStyles = core.makeStyles(function () { return ({
    root: {
        padding: "40px 60px",
        backgroundColor: flashWhite,
    },
    logo: { marginBottom: "20px" },
    socialMedia: {
        marginRight: "30px",
    },
    contacts: { marginTop: "20px" },
    pageLinks: {
        paddingBottom: "15px",
        color: textPrimary,
    },
}); });

/**
  @param data
**/
var Footer = function (_a) {
    var data = _a.data;
    var _b = FooterStyles(), root = _b.root, logo = _b.logo, socialMedia = _b.socialMedia, contacts = _b.contacts, pageLinks = _b.pageLinks;
    return (React__default['default'].createElement(core.Grid, { container: true },
        React__default['default'].createElement(core.Grid, { className: root, item: true, container: true, xs: 12 },
            React__default['default'].createElement(core.Grid, { item: true, container: true, xs: 12, lg: 3 },
                React__default['default'].createElement(core.Grid, { item: true, xs: 12 },
                    React__default['default'].createElement("img", { height: "46px", className: logo, src: data.logo, alt: "tezDealz logo" })),
                React__default['default'].createElement(core.Grid, { item: true, xs: 12 }, data.socialMedia &&
                    data.socialMedia.map(function (item) { return (React__default['default'].createElement("a", { className: socialMedia, key: item.name + "-link", href: item.path },
                        React__default['default'].createElement("img", { height: "17px", src: item.icon, alt: item.name }))); })),
                React__default['default'].createElement(core.Grid, { item: true, xs: 12 },
                    React__default['default'].createElement("div", { className: contacts }, data.contacts &&
                        data.contacts.map(function (contact, index) { return (React__default['default'].createElement(core.Typography, { key: contact.location + "-" + index, variant: "body2", gutterBottom: true, component: "h5" },
                            contact.location,
                            ": ",
                            contact.phone)); })))),
            React__default['default'].createElement(core.Grid, { item: true, xs: 12, lg: 3 }, data.services &&
                data.services.map(function (service, index) { return (React__default['default'].createElement(reactRouterDom.NavLink, { className: pageLinks, key: "page-link-" + index, to: service.path },
                    React__default['default'].createElement(core.Typography, { className: pageLinks, variant: "body2", component: "h5", gutterBottom: true }, service.name))); })),
            React__default['default'].createElement(core.Grid, { item: true, xs: 12, lg: 3 }, data.about &&
                data.about.map(function (about, index) { return (React__default['default'].createElement(reactRouterDom.NavLink, { className: pageLinks, key: "page-link-" + index, to: about.path },
                    React__default['default'].createElement(core.Typography, { className: pageLinks, variant: "body2", component: "h5", gutterBottom: true }, about.name))); })),
            React__default['default'].createElement(core.Grid, { item: true, xs: 12, lg: 3 }, data.help &&
                data.help.map(function (help, index) { return (React__default['default'].createElement(reactRouterDom.NavLink, { className: pageLinks, key: "page-link-" + index, to: help.path },
                    React__default['default'].createElement(core.Typography, { className: pageLinks, variant: "body2", component: "h5", gutterBottom: true }, help.name))); }))),
        React__default['default'].createElement(core.Grid, { className: root, item: true, xs: 12 },
            React__default['default'].createElement(core.Typography, { variant: "h4", gutterBottom: true }, data.headers.leadingCategories),
            Object.entries(data.categories).map(function (_a) {
                var keys = _a[0], values = _a[1];
                return (React__default['default'].createElement("div", { className: contacts, key: "category-" + keys },
                    React__default['default'].createElement(core.Typography, { variant: "h3", color: "textPrimary", gutterBottom: true, component: "span" }, "" + keys,
                        ":"),
                    values.map(function (item, index) { return (React__default['default'].createElement(reactRouterDom.NavLink, { key: "most-popular-item-" + index, className: pageLinks, to: item.path },
                        React__default['default'].createElement(core.Typography, { variant: "body2", color: "textPrimary", gutterBottom: true, component: "span" }, " " + item.name,
                            " |"))); })));
            })),
        React__default['default'].createElement(core.Grid, { className: root, item: true, xs: 12 },
            React__default['default'].createElement(core.Typography, { variant: "h4", gutterBottom: true }, data.headers.MostSearched),
            React__default['default'].createElement("div", { className: contacts }, data.mostSearched &&
                data.mostSearched.map(function (item, index) { return (React__default['default'].createElement(reactRouterDom.NavLink, { className: pageLinks, key: "most-searched-item-" + index, to: item.path },
                    React__default['default'].createElement(core.Typography, { variant: "body2", gutterBottom: true, component: "span" }, " " + item.name,
                        " |"))); })))));
};

exports.CustomButton = CustomButton;
exports.Footer = Footer;
//# sourceMappingURL=index.js.map
