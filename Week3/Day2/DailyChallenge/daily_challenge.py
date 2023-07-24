class Pagination():
    def __init__(self, items: list = None, pageSize: int = 10) -> None:
        self.items = items
        self.pageSize = pageSize
        self.first_visible = 0
        self.last_visible = self.pageSize
        self.page = 1
        self.list_len = len(self.items)
        self.pages = int(len(self.items) / self.pageSize + 1)
        self.last_page_len = int(len(self.items) % self.pageSize)

    def getVisibleItems(self):
        self.visible = self.items[self.first_visible:self.last_visible]
        return self.visible

    def nextPage(self):
        # not to the last page
        if 1 <= self.page < self.pages - 1:
            self.first_visible += self.pageSize
            self.last_visible += self.pageSize
            self.page += 1
        # to the last page
        elif self.page == self.pages - 1:
            self.first_visible += self.pageSize
            self.last_visible += self.last_page_len
            self.page += 1
        # already on the last page
        elif self.page == self.pages:
            print('Can`t go to the next page, current page is the last one')
        else:
            print(f'Error. Not correct page {self.page}')

    def prevPage(self):
        # from the last page
        if self.page == self.pages:
            self.first_visible -= self.pageSize
            self.last_visible -= (self.last_page_len)
            self.page -= 1
        # not first, not last
        elif 1 < self.page < self.pages:
            self.first_visible -= self.pageSize
            self.last_visible -= self.pageSize
            self.page -= 1
        # on the first page
        elif self.page == 1:
            print('Can`t go to the previous page, current page is the first one')
        else:
            print(f'Error. Not correct page {self.page}')

    def firstPage(self):
        self.first_visible = 0
        if self.pageSize < self.list_len:
            self.last_visible = self.pageSize
        else:
            self.last_visible = self.list_len - 1
        self.page = 1

    def lastPage(self):
        self.first_visible = (self.pages - 1) * self.pageSize
        self.last_visible = self.list_len
        self.page = self.pages

    def goToPage(self, pageNum):
        self.pageNum = int(pageNum)
        # first or less page
        if self.pageNum <= 1:
            self.firstPage()
        # middle page
        elif 0 < self.pageNum < self.pages - 1:
            self.first_visible = (self.pageNum - 1) * self.pageSize
            self.last_visible = self.pageNum * self.pageSize
            self.page = self.pageNum
        # last or bigger page
        elif self.pageNum >= self.pages:
            self.lastPage()


if __name__ == '__main__':
    # initialization
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)
    # next check
    print(p.getVisibleItems())
    p.nextPage()
    print(p.getVisibleItems())
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()
    p.nextPage()
    print(p.getVisibleItems())
    p.nextPage()
    print(p.getVisibleItems())
    # previous check
    p.prevPage()
    print(p.getVisibleItems())
    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()
    p.prevPage()
    print(p.getVisibleItems())
    p.prevPage()
    print(p.getVisibleItems())
    # last check
    p.lastPage()
    print(p.getVisibleItems())
    # first check
    p.firstPage()
    print(p.getVisibleItems())
    # go to page chech
    p.goToPage(2)
    print(p.getVisibleItems())
    p.goToPage(4.0)
    print(p.getVisibleItems())
    p.goToPage(-1.1)
    print(p.getVisibleItems())
    p.goToPage(1.1)
    print(p.getVisibleItems())
    p.goToPage(10)
    print(p.getVisibleItems())
