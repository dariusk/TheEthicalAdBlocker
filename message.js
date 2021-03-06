/*
 * This file is part of The Ethical Ad Blocker,
 * Copyright (C) 2006-2015 Eyeo GmbH
 *
 * The Ethical Ad Blocker is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * The Ethical Ad Blocker is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with The Ethical Ad Blocker.  If not, see <http://www.gnu.org/licenses/>.
 */

Array.prototype.pickRemove = function() {
  var index = Math.floor(Math.random()*this.length);
  return this.splice(index,1)[0];
};

var sites = [
  ['Wikipedia', 'http://en.wikipedia.org/'],
  ['the W3C','http://www.w3.org/'],
  ['example.com','http://example.com/'],
  ['the Mozilla Developer Network','https://developer.mozilla.org/en-US/'],
  ['the Internet Engineering Task Force','https://www.ietf.org/'],
  ['textfiles.com','http://textfiles.com/'],
  ['the Internet Archive','https://archive.org/'],
  ['the Electronic Frontier Foundation','https://www.eff.org/'],
  ['zombo.com','https://html5zombo.com/']
];

var item1 = sites.pickRemove();
var item2 = sites.pickRemove();
var item3 = sites.pickRemove();

var list = '<a href="' + item1[1] + '">' + item1[0] + '</a>, <a href="' + item2[1] + '">' + item2[0] + '</a>, or <a href="' + item3[1] + '">' + item3[0] + '</a>';

document.getElementById('list').innerHTML = list;
