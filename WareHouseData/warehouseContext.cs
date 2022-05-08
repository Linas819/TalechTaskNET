using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TalechTaskNET.WareHouseData
{
    public partial class warehouseContext : DbContext
    {
        public warehouseContext()
        {
        }

        public warehouseContext(DbContextOptions<warehouseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<Pricechange> Pricechanges { get; set; }
        public virtual DbSet<Quantitychange> Quantitychanges { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;database=warehouse", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.19-mariadb"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasCharSet("utf8mb4")
                .UseCollation("utf8mb4_general_ci");

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.ToTable("inventory");

                entity.Property(e => e.Id)
                    .HasColumnType("int(20)")
                    .HasColumnName("ID");

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Ean)
                    .HasColumnType("int(14)")
                    .HasColumnName("EAN");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("NAME");

                entity.Property(e => e.Quantity).HasColumnType("int(5)");

                entity.Property(e => e.Type).HasColumnType("tinyint(3)");

                entity.Property(e => e.Weight).HasColumnName("WEIGHT");
            });

            modelBuilder.Entity<Pricechange>(entity =>
            {
                entity.ToTable("pricechange");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID");

                entity.Property(e => e.ItemId)
                    .HasColumnType("int(11)")
                    .HasColumnName("ITEM_ID");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("MODIFIED_DATE")
                    .HasDefaultValueSql("current_timestamp()");

                entity.Property(e => e.Price).HasColumnName("PRICE");
            });

            modelBuilder.Entity<Quantitychange>(entity =>
            {
                entity.ToTable("quantitychange");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID");

                entity.Property(e => e.ItemId)
                    .HasColumnType("int(11)")
                    .HasColumnName("ITEM_ID");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("MODIFIED_DATE")
                    .HasDefaultValueSql("current_timestamp()");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
