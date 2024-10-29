﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Villa.DataAccess.Abstract;
using Villa.DataAccess.Context;
using Villa.DataAccess.Repositories;
using Villa.Entity.Entites;

namespace Villa.DataAccess.EntityFramework
{
    public class EFProductDal : GenericRepository<Product>, IProductDal
    {
        public EFProductDal(VillaContext context) : base(context)
        {
        }
    }
}
