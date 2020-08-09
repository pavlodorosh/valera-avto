<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name', 150);
            $table->string('adminText', 150);
            $table->string('options');
            $table->text('description');
            $table->integer('typeId');
            $table->integer('markaId');
            $table->integer('modelId');
            $table->integer('colorId');
            $table->integer('year');
            $table->integer('price');
            $table->integer('mileage');
            $table->integer('fuelId');
            $table->integer('transmissionId');
            $table->integer('driveId');
            $table->integer('sizeId');
            $table->integer('seats');
            $table->integer('wheels');
            $table->double('engine', 2, 2);
            $table->double('liftingcapacity', 10, 2);
            $table->double('weight', 10, 2);
            $table->enum('turbo', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('spark', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('hot', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('top', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('sold', ['0', '1'])->default('0')->nullable($value = false);
            $table->enum('active', ['0', '1'])->default('0')->nullable($value = false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car');
    }
}
